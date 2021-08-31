import React from 'react';
const Abd = (props: any) => {
    return (
        <>
            {props.postData.map((e) => (
                <div>{e.title}</div>
            ))}
        </>
    );
};
export default Abd;
