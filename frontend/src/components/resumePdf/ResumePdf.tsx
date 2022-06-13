import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { resumePdf } from '../../asset';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const ResumePdf = () => {
    const [width, setWidth] = useState(window.innerWidth > 1800  ? window.innerWidth / 2  :  window.innerWidth> 1000 ? window.innerWidth/ 1.4 :  window.innerWidth );
    
    useEffect(() => {
         window.addEventListener('resize', () => setWidth(window.innerWidth > 1800  ? window.innerWidth / 2  :  window.innerWidth> 1000 ? window.innerWidth/ 1.4 :  window.innerWidth ));
    });

    return (
        <S.Past_pdf>
            <S.Flex_row>      
                <Document file={resumePdf}>
                    <Page pageNumber={1} width={width} renderTextLayer= {false}/>
                </Document>
                <div style= {{marginBottom:'97px',height: '3px', width:width , backgroundColor:"gray"}}/>
                <Document file={resumePdf} >
                    <Page pageNumber={2} width={width} renderTextLayer= {false}/>
                </Document>
                <div style= {{marginBottom:'97px',height: '3px', width:width , backgroundColor:"gray"}}/>

            </S.Flex_row>
        </S.Past_pdf>
    );
};

export default ResumePdf;