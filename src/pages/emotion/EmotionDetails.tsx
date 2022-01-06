
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import styles from "./EmotionDetails.module.scss";
import { useGetEmotionDetailsQuery } from "../../services/EmotionsApi";
import moment from "moment";
import Loading from "../../components/loading/Loading";
import parse from 'html-react-parser'

export const EmotionDetails = () => {

    const { id } = useParams();

    const { data, isLoading } = useGetEmotionDetailsQuery({ emotionId: id });

    const _data = data as any;  //change to interface

    document.title = _data?.title;

    const _html = _data !== undefined ? <div key={_data.id}>
        <div className={styles.owner_container}>
            <div className={styles.img_owner}></div>
            <div className={styles.owner_info}>
                <p className={styles.ownerUsername}>{_data.ownerUsername}</p>
                <span className={styles.publishTime}>{moment(_data.creationTime).fromNow()}</span>
            </div>
        </div>
        <div className={styles.title_emotion}>
            <h1 className={styles.title}>{_data.title}</h1>
            {_data.tags.map((element: any) => {
                return <a href={`/t/${element.replace('#', '')}`} key={element}><span className={styles.tag}>{element}</span></a>
            })}
        </div>
        <div className={styles.body}>
            {parse(_data.content)}
        </div>
    </div> : <></>;

    return <MainLayout>
        <div className={styles.container}> 
            <Card boxShadow={true}>
                {isLoading ? <Loading
                    fullScreen={false}
                    quantityDot={3}
                    className={styles.loading}
                /> : _html}

            </Card>
        </div>
    </MainLayout>
};

export default EmotionDetails;


