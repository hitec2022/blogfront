 pipeline {
     agent any
     stages {
         stage('BUILD') {
             steps {
                sh 'npm install'
                sh 'npm run build'
             }
         }

         stage('remove') {
             steps {
                sh 'ssh root@nginx "rm -rf /home/hitec/nginx/board"'
             }
         }
         
         stage('Deployment') {
            steps {
                sh 'scp -r ./build root@nginx:/home/hitec/nginx/board'
            }
         }
     }
 }