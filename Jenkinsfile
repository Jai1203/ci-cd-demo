pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t calculator-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop calculator-container || exit 0'
                bat 'docker rm calculator-container || exit 0'
                bat 'docker run -d -p 3000:3000 --name calculator-container calculator-app'
            }
        }

    }
}