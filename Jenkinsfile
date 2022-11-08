 pipeline {
     agent any
     stages {
         stage('BUILD') {
             steps {
                sh 'npm install'
                sh 'CI=false npm run build'
             }
         }
        stage('STOP App') {
             steps {
                 script {
                     try {
                         sh 'docker stop hitec-front'
                         sh 'docker rm hitec-front' 
                     } catch (err) {
                         echo err.getMessage()
                         echo 'Stop App Failed'
                     }
                 }
             }
         }
         stage('Dockernizer') {
             steps {
                 sh 'docker build -t hitec-front:0.0.1 .'
             }
         }
         stage('Deployment') {
             steps {
                 sh 'docker run -d --name hitec-front hitec-front:0.0.1'
             }
         }
     }
 }