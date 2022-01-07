import MainLayout from "../../components/layout/mainLayout/MainLayout";
import Loading from "../../components/loading/Loading";
import styles from "./Home.module.scss";
import { useGetEmotionsQuery } from "../../services/EmotionsApi";
import { isValidArray } from "../../utils/Helper";
import Card from "../../components/card/Card";
import moment from 'moment/moment.js'
import { Link } from "react-router-dom";
import { EMOTION_DETAILS } from "../../navigation/Routes";

const Home = () => {
    const { data, isLoading } = useGetEmotionsQuery({});

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
                        <Link to={`${EMOTION_DETAILS}/${emotion.id}`} className={styles.title}>
                            <h1 className={styles.title}>{emotion.title}</h1>
                        </Link>
                        {emotion.tags.map((element: string) => {
                            return <a href={`/t/${element}`} key={element} ><span className={styles.tag}>{element}</span></a>
                        })}
                    </div>
                </div>
            </Card>
        }) : <></>;

    return (
        <MainLayout>
            {isLoading ? (
                <Loading
                    fullScreen={false} 
                    className={styles.loading}
                />
            ) : <>{_html}</>
            }
        </MainLayout>
    )
}

export default Home;