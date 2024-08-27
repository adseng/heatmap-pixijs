import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test1 from "../Test1";
import Test2 from "../Test2";
import Test3 from "../Test3";
import Test4 from "../Test4";
import Test5 from "../Test5";
import Test7 from "../Test7";
import Test8 from "../Test8";
import Test9 from "../Test9";
import Test10 from "../Test10";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/test1'} element={<Test1/>}/>
                <Route path={'/test2'} element={<Test2/>}/>
                <Route path={'/test3'} element={<Test3/>}/>
                <Route path={'/test4'} element={<Test4/>}/>
                <Route path={'/test5'} element={<Test5/>}/>
                <Route path={'/test7'} element={<Test7/>}/>
                <Route path={'/test8'} element={<Test8/>}/>
                <Route path={'/test9'} element={<Test9/>}/>
                <Route path={'/test10'} element={<Test10/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
