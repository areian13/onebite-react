// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// if, for 같은건 못쓴다는 얘기다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
    const user = {
        name: "노태윤",
        isLogin: true,
    };

    if (user.isLogin) {
        return <div>logout</div>;
    } else {
        return <div>login</div>;
    }
    
    // return (
    //     <>
    //         {
    //         user.isLogin ? <div>logout</div> : <div>login</div>
    //         }
    //     </>
    // );
};

export default Main;