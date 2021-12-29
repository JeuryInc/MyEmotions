import { useCallback } from "react"; 
import { closeModal } from "../../redux/slices/ModalSlice";
import CloseIcon from "../../assets/svgs/close.svg";
import CloseHoverIcon from "../../assets/svgs/close_hover.svg";
import Card from "../card/Card";
import styles from "./ModalHandler.module.scss";
import BUTTON_SIZE from "../../enums/ButtonSize";
import { RootState } from "../../redux/Store";
import { useAppSelector } from '../../utils/hooks'
  
const ModalHandler = () => {
    const modalData = useAppSelector((state: RootState) => state.modalHandler);
 
    let classNames = null;

    debugger
    if (modalData.isValid && modalData.show) { 
        if (document.body.clientHeight > document.documentElement.clientHeight) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "8px";
        }
    } else if (!modalData.isValid) {
        document.body.style.overflow = "initial";
        document.body.style.paddingRight = "unset";
    }

    if (modalData.size === BUTTON_SIZE.SMALL) {
        classNames = styles.small_max_width;
    } else if (modalData.size === BUTTON_SIZE.MEDIUM) {
        classNames = styles.medium_max_width;
    } else if (modalData.size === BUTTON_SIZE.LARGE) {
        classNames = styles.large_max_width;
    } else {
        classNames = "";
    } 

    if (modalData.isValid) {
        return (
            <div
                className={`${styles.main} ${modalData.show ? styles.show_modal : ""
                    } ${classNames}`}
            >
                <div className={styles.backdrop}  ></div>
                <div className={styles.container_card}>
                    <Card
                        color={"white"}
                        className={styles.container}
                    >
                        <><div className={styles.title_holder}>
                            <span>{modalData.title}</span>
                            <div className={styles.close_icon} >
                                <img src={CloseIcon} alt={CloseIcon} />
                                <img
                                    src={CloseHoverIcon}
                                    alt={CloseHoverIcon}
                                    className={styles.icon_hover}
                                />
                            </div>
                        </div>
                            {!!modalData.header ? (
                                <div className={styles.header_holder}>{modalData.header}</div>
                            ) : null}
                            {!!modalData.body ? (
                                <Card color="transparent" className={styles.body_holder}>
                                    {modalData.body}
                                </Card>
                            ) : null}</>
                    </Card>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ModalHandler;
