// Express 모듈을 불러옵니다.
const express = require('express');

// Express 앱을 생성합니다.
const app = express();
// 앱의 포트를 설정합니다. 환경 변수에 포트가 지정되어 있지 않으면 3000번 포트를 사용합니다.
// app.set(키, 값)에 데이터를 저장, 데이터를 app.get(키)로 가져올 수 있음.
app.set('port', process.env.PORT || 3000);

// 루트 경로('/')로 GET 요청이 오면 'Hello, Express'를 응다브로 보냅니다.
// app.get(주소, 라우터) -> 주소에 대한 GET요청이 올때 어떤 동작을 할지 적는 부분
// req -> 요청에 대한 정보가 들어 있는 객체
// req -> 응답에 대한 정보가 들어있는 객체
app.get('/', (req, res) => {
    res.send('Hello, Express');
});

// 앱이 설정한 포트에서 대기 상태로 시작됩니다.
// 서버가 시작되면 해당 포트에서 대기 중 메세지를 로그에 출력합니다.
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});