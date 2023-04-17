agent any
    
    stages {
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
            artifacts {
                paths 'cypress/videos', 'cypress/screenshots'
                expireIn 2.hours
            }
        }
    }
