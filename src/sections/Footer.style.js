import styled from "styled-components";

export const FooterStyles = styled.div`
       z-index: 10;
       img {
    max-width: 100%;
    height: auto;
}
        section {
            padding: 60px 0 20px;
           /* min-height: 100vh;*/
        }
 ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
.contact-area {
    border-bottom: 1px solid #353C46;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contact-content{
    text-align: center;
    h1{
        color: #fff;
        font-size:3rem;
        font-weight: bold;
    }
    .contact-quote{
        font-size: 2rem;
        color: #f5f5f5;
    }
}


.contact-content p {
    font-size: 15px;
    margin: 30px 0 30px;
    position: relative;
}

.contact-content p::after {
    background: #353C46;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
}

.contact-content h6 {
    color: #8b9199;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}

.contact-content span {
    color: #353c47;
    margin: 0 10px;
}

.contact-social {
    margin-top: 30px;
}

.contact-social > ul {
    display: inline-flex;
}

.contact-social ul li a {
    border: 1px solid #8b9199;
    color: #8b9199;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
}

.contact-social ul li a:hover {
    border: 1px solid #FAB702;
    color: #FAB702;
}

.contact-content img {
    max-width: 210px;
}

section, footer {
    background: #01294d;
    color: #868c96;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 44px;
}

`;