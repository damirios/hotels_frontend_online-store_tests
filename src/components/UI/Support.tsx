import { ContactsPhone } from "./ContactsPhone";

export function Support(props: {isMobile: boolean}) {
    const {isMobile} = props;

    return (
        <div className="bottom-header__support support">
            <ContactsPhone isMobile={isMobile} class='support' />
            <div className="support__image-box">
                {isMobile ? 
                    <img src="./images/icons/phone.svg" alt="phone" /> :
                    <img src="./images/support.png" alt="support" className="support__image" />
                }
                <div className="support__online-point"></div>
            </div>
        </div>
    );
}