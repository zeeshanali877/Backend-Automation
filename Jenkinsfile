pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }
    
    stages {
        stage('Install npm') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -'
                sh 'apt-get install -y nodejs'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm ci'
            }
            post {
                success {
                    echo 'Build succeeded!'
                }
                failure {
                    echo 'Build failed!'
                }
            }
        }
        
        stage('Test') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm run test:api'
            }
            post {
                success {
                    echo 'Tests succeeded!'
                }
                failure {
                    echo 'Tests failed!'
                }
            }
        }
    }
}
