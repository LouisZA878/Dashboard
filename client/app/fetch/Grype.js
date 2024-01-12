import axios from 'axios'

const Grype = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/data')
        const { data } = response
        return data
    } catch(err) {
        console.error(err)
    }

}

export default Grype