import styled from "styled-components";
import Confetti from "react-confetti";
import React from "react";

export default function Done() {
    return (
        <div
            style={{
                marginTop: "200px",
                width: "400px",
                height: "320px",
                lineHeight: "100px",
                verticalAlign: "middle",
                backgroundColor: "#dddddd",
                borderRadius: "16px",
            }}
        >
            <Confetti width={"400px"} height={"1000px"} />
            <H1>
                <div
                    style={{
                        margin: "0 auto 0 auto",
                        width: "350px",
                        paddingTop: "96px",
                    }}
                >
                    <Img src="./checked.png" />
                    결제가 완료되었습니다!
                </div>
            </H1>
        </div>
    );
}

const Img = styled.img`
    width: 100px;
    vertical-align: middle;
    margin-right: 16px;
`;

const H1 = styled.h1`
    font-size: 24px;
`;
