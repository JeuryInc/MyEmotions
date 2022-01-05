import styles from "./MyEmotions.module.scss";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import { useGetEmotionsByUserQuery } from '../../services/EmotionsApi';
import { isValidArray, splitStringToArray } from "../../utils/Helper";
import moment from "moment";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";

export const MyEmotions = () => {
    const { data, isLoading } = useGetEmotionsByUserQuery({});

    const _data = data as Array<any>;

    var _html = isValidArray(_data) ? _data.map(
        (emotion) => {
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
                        {splitStringToArray(emotion.tags[0]).map(element => {
                            return <a href={`/t/${element.replace('#', '')}`}><span key={element} className={styles.tag}>{element}</span></a>
                        })}
                    </div>
                </div>
            </Card>
        }) : <></>;

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