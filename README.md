# js-state-proxy
velog.io 에 올라온 JavaScript 상태관리 글을 참고하면서 만들었다. [JavaScript 상태관리](https://velog.io/@ljinsk3/JavaScript-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC)   
개별삭제 기능을 추가로 만들다가 삽질을 여러번 했다.

1. 여러 개를 동시에 삭제 하고 싶은데 그게 또 clear all 은 아닌 경우   
1번 집에 가기 2번 도착해서 손씻기 3번 저녁 먹기 4번 설거지 하기 가 있고   
나는 집에 도착해서 손을 씻었지만!! 근데 아직 저녁은 못 먹었다면?   
1번, 2번을 삭제하고 3번, 4번만 남겨두는 경우다..   
2. 막상 To do List 에 등록은 했는데 정말 못 할 것 같아서 완수하지 않고 삭제하는 경우   
근데 퇴근하면서 집앞에서 샌드위치를 하나 사서 들고가서 저녁은 먹었지만 설거지를 안 해도 된다면?   
이럴 때 설거지하기는 단순히 그냥 할 일에서 삭제처리가 된다. 완수처리가 아닌..

## 변경사항
1. 관리하는 변수 할 일 목록 `items`, 이제까지 해낸 건수 `count` 를 `state` 밑에 바로 두지 않고   
`state`를 감싸는 `_state` 라는 일종의 wrapper 변수에 담았다.   
할 일을 완료하는 건 목록 `items` 도 변경하고 동일한 트랜잭션 내에서 complete 건수 `count`도 증가해야 하는데   
목록만 변경했는데 Proxy를 통해 setTrap 이 trigger 되어서 이게 좀 불편하다고 생각했다.
2. _state 내부의 state 에 접근하기 위하여 `getter()` 함수를 생성해서 바로 state 라는 이름으로 접근가능하게 했다.   
단순히 state에 _state.state를 할당했더니 값이 별도로 생성될 뿐 그 때 그 때 변경되는 값에는 접근하기 힘들었다..   
이벤트 위임을 활용하여 complete 버튼과 cancel 버튼에 이벤트를 부여했다.

## 코드 구조
```
// 디렉터리 구조
/src
├──lib
│   ├──abstractStore.js
│   ├──component.js
│   ├──pubsub.js
│   └──store.js 
└── todo
    ├── components
    │   ├── done-count.js
    │   ├── todo-list.js
    │   ├── init-event.js
    │   └── init-state.js
    ├── todo-actions.js
    ├── todo-mutations.js
    └── todo-state-store.js
```
