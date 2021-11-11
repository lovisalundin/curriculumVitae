import './Links.css';
import {LinkedinFilled, MailOutlined} from '@ant-design/icons';

export function Links() {
    return (
        <div className="Links"> 
            <a className="Link" href="mailto:lovisa.c.lundin@gmail.com">
                <MailOutlined />
            </a>
            <a className="Link" href="https://www.linkedin.com/in/lovisa-lundin-791128b5/"> 
                <LinkedinFilled />
            </a>
        </div>
    )   
}