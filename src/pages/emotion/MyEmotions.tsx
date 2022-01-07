import styles from "./MyEmotions.module.scss";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import { useGetEmotionsByUserQuery } from '../../services/EmotionsApi';
import { isValidArray } from "../../utils/Helper";
import moment from "moment";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import Sad from "../../assets/sad.png";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { EMOTION } from "../../navigation/Routes";

export const MyEmotions = () => {
    const { data, isLoading } = useGetEmotionsByUserQuery({});

    const _data = data as Array<any>;

    const navigate = useNavigate();

    const routeChange = () => navigate(EMOTION);

    var _html = isValidArray(_data) ? _data.map(
        (emotion) => {
            console.log(emotion);
            return <Card boxShadow={true} className={styles.emotion_card} key={emotion.id}>
                <div>
                    <div className={styles.owner_container}>
                        <div className={styles.img_owner}></div>
                        <div className={styles.owner_info}>
                            <p className={styles.ownerUsername}>{emotion.ownerUsername}</p>
                            <span className={styles.publishTime}>{moment(emotion.creationTime).fromNow()}</span>
                        </div>
                    </div>
                    <div className={styles.emotion_container}>
                        <h1 className={styles.title}>{emotion.title}</h1>
                        {emotion.tags.map((element:string) => {
                            return <a href={`/t/${element}`} key={element}><span className={styles.tag}>{element}</span></a>
                        })}
                    </div>
                </div>
            </Card>
        }) : <div className={styles.noemotion_container}> <h1>You still don't have saved emotions</h1>  <img src={Sad} className={styles.sad_face} alt="any one emotion" />  <Button
            text="Create you first emotion"
            className={styles.button}
            onClicked={() => routeChange()}
        /></div>;

    return (
        <MainLayout
        >
            <div className={styles.container}>
                {isLoading ? (
                    <Loading
                        fullScreen={false}
                        quantityDot={3}
                        className={styles.loading}
                    />
                ) : <>{_html}</>
                }

            </div>
        </MainLayout>
    );
};


export default MyEmotions;