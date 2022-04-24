import styled from 'styled-components';

interface MessageProps {
    owner: boolean;
}

export const ChatArea = styled.div`
    flex: 1;
    overflow-x: auto;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const Input = styled.div`
    height: 80px;
    min-height: 80px;
    border-top: 1px solid #A7A7A7;
    
    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        
        div:nth-child(1) {
        flex: 1;
        height: 50px;
        margin: 0 5px;
        background: #F9F9F9;
        border-radius: 14px;

        input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 20px;
            background: transparent;
        }
    }
        div:nth-child(2) {
            width: 100px;
            align-items: center;
            border: 2px solid teal;
            height: 100%;
        }
    }
`


export const Message = styled.div<MessageProps>`
    background: ${({ owner }) => owner ? '#4D7BFF' : '#F3F3F3'};
    color: ${({ owner }) => owner ? '#FFFFFF' : '#636363'};
    padding: 12px 9px;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: inline-block;
    margin-left: ${({ owner }) => owner ? 'auto' : 0};
`