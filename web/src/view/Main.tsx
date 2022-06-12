import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="box-insert">
                Q : <input /><br></br>
                A : <input />
            </div>
            <div className="box-current">
                <div>Cards : 110</div>
                <div>
                    OK3 : 40 <br></br>
                    OK2: 50<br></br>
                    OK1: 10<br></br>
                    OK0: 20<br></br>
                </div>
            </div>
        </div>
    );
};

export default Main;