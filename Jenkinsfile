 pipeline {
     agent any
     stages {
         stage('BUILD') {
             steps {
                sh 'npm install'
                sh 'CI=false npm run build'
             }
         }
/*
         stage('remove') {
             steps {
                sh 'ssh root@nginx "rm -rf /home/hitec/nginx/board"'
             }
         }
         
*/
         stage('Deployment') {
            steps {
                sh 'docker cp hitec-jenkins-agent:./build/* /home/hitec/nginx/board'
            }
         }
     }
 }