import React from "react";

function Item(props){
    return(
        <li>
            <a href = {props.link}>{props.content}</a>
        </li>
    );
}

function Menu({list}){
    return(
        <ul>
            {list.map((item,index) => (
                <Item key={index} link={item.url} content={item.text} />
            ))}
        </ul>
    );
}

function Header(){
    const list = [
        {url : '#home', text : 'Trang chủ'},
        {url : '#about', text : 'Giới thiệu'},
        {url : '#service', text : 'Dịch vụ'},
        {url : '#contact' , text : 'Liên hệ'}
    ];
    return(
        <header>
            <Menu list={list} />
        </header>
    )
}

export default Header;