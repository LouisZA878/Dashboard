const container_name = ['example', 'wayne', 'container', 'number', 'uno', 'uno', 'container', 'container', 'Grype', 'container']
const severity = ['low', 'medium', 'high', 'low','critical', 'severe', 'low', 'fixed']
const grype_packages = ['express', 'mongo', 'openssl', 'bash', 'express', 'bash', 'django']
const fix_version = ['1.12', '1.5', '2.1.1.2', '3.1.1']

const arr = []

const grype = () => {
    for (var i = 0; i < 750; i++) {
        arr.push({
            container_name: container_name[
                Math.floor(Math.random() * container_name.length)
            ],
            vulnerabilities: [
                {
                    severity: severity[Math.floor(Math.random() * severity.length)],
                    package: grype_packages[Math.floor(Math.random() * grype_packages.length)],
                    fix_version: fix_version[Math.floor(Math.random() * fix_version.length)],
                },
                {
                    severity: severity[Math.floor(Math.random() * severity.length)],
                    package: grype_packages[Math.floor(Math.random() * grype_packages.length)],
                    fix_version: fix_version[Math.floor(Math.random() * fix_version.length)],
                },
                {
                    severity: severity[Math.floor(Math.random() * severity.length)],
                    package: grype_packages[Math.floor(Math.random() * grype_packages.length)],
                    fix_version: fix_version[Math.floor(Math.random() * fix_version.length)],
                },
                {
                    severity: severity[Math.floor(Math.random() * severity.length)],
                    package: grype_packages[Math.floor(Math.random() * grype_packages.length)],
                    fix_version: fix_version[Math.floor(Math.random() * fix_version.length)],
                },
            ]

        })
    }
}
grype()

module.exports = arr;

// {
//     "container_name": "example-container",
//     "image_tag": "v1.0",
//     "vulnerabilities": [
//       {
//         "id": "CVE-2021-12345",
//         "severity": "High",
//         "package": "openssl",
//         "version": "1.2.3",
//         "description": "A description of the vulnerability.",
//         "fix_version": "1.2.4"
//       },
//       {
//         "id": "CVE-2022-54321",
//         "severity": "Critical",
//         "package": "bash",
//         "version": "4.1.2",
//         "description": "Another vulnerability description.",
//         "fix_version": "4.1.3"
//       }
//     ],
//   }