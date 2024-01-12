import { useEffect, useState } from 'react'

import HBar from './charts/HBar'
import DLine from './charts/DLine'
import Line from './charts/Line'
import Pie from './charts/Pie'
import Panel from './charts/Panel'
import { data } from 'autoprefixer'

const Body = ({ grype, conName, open }) => {
const [con, setCon] = useState([])
const [FirstSum, setSum] = useState(0)
const [Packs, setPacks] = useState([])
const [Sevs, setSevs] = useState([])
const [SORT, setSORT] = useState([])
const [Amount, setAmount] = useState(0)

    useEffect(() => {

        let packs = []
        let sevs = []
        let sum = 0
        const conArr = grype.filter(item =>
            conName === '' ?
            item.container_name === grype[0].container_name :
            item.container_name === conName
        )
        setCon(conArr)
        
    
        const containerNamesSet = new Set();
        conArr.forEach((item) => {
            item.vulnerabilities.forEach((Item) => {
                if (Item.hasOwnProperty('package')) {
                    containerNamesSet.add(Item.package);
                  }
            })
    
        });
        const setConArr = Array.from(containerNamesSet)
        const severityNamesSet = new Set();
        conArr.forEach((item) => {
            item.vulnerabilities.forEach((Item) => {
                if (Item.hasOwnProperty('severity')) {
                    severityNamesSet.add(Item.severity);
                  }
            })
    
        });
        const setSevArr = Array.from(severityNamesSet)
        let d = {
            count: 0,
            package: '',
        }
        let h = {
            time: 0,
            count: 0,
            package: '',
            severity: ''
        }
        let amount = 0
        const data = setConArr.forEach(type => {
                let counts = 0
                
            const items = conArr.filter(item => {

                for (const obj of item.vulnerabilities) {
                    if(obj.package === type){
                        amount += 1

                        d = {
                            count: counts += 1,
                            package: type
                        }
                    }           
                }
                
            })
            packs.push(d)
        })
        setAmount(amount)
          function countSeverityOccurrences(packageName, severity) {
            let count = 0;
            conArr.forEach(item => {
              if (item.container_name && item.vulnerabilities) {
                const vulnerabilities = item.vulnerabilities.filter(vuln => vuln.package === packageName);
                vulnerabilities.forEach(vuln => {
                  if (vuln.severity === severity) {
                    count++;
                  }
                });
              }
            });
          
            h = {
                count: count,
                package: packageName,
                severity: severity
            }
            sevs.push(h)
          }
          
          setSevArr.forEach(sev => {
            setConArr.forEach(type => {
                countSeverityOccurrences(type, sev);
            })
          })
          setPacks(packs)
          setSevs(sevs)
          packs.forEach(item => {
            setSum(sum += item.count)
        })
        setSum(sum)
    }, [conName])
    useEffect(() => {
        const SORTs = grype.sort(function (a, b) {
            if (a.container_name < b.container_name) {
              return -1;
            }
            if (a.container_name > b.container_name) {
              return 1;
            }
            return 0;
          });
          setSORT(SORTs)
    }, [grype])

  return (
    <div className='Body'>
        <HBar
            Sum={FirstSum}
            data={Packs}
            Title={'Amount of Vulenerabilities per package'}
            Text={'Number of Vulnerabilities'}
            Width={open ? '445px' : '460px'}
            Height={400}
        />
        <DLine
            Sum={FirstSum}
            data={Sevs}
            Title={'Amount of severities per level per package'}
            Text={'Number of Vulnerabilities'}
            Width={open ? '440px' : '450px'}
            Height={250}
        />
        <Pie
            Sum={FirstSum}
            data={Packs}
            amount={Amount}
            Title={'Amount of severities per level per package'}
            Text={'Number of Vulnerabilities'}
            Width={open ? '275px' : '300px'}
            Height={250}
        />
        <Panel
            data={SORT}
            Height={320}
            conName={conName === '' ? grype[0].container_name : conName}
        />
    </div>
  )
}

export default Body