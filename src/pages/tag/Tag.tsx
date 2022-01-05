import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import styles from "./Tag.module.scss";
import { useGetEmotionsByTagQuery } from '../../services/EmotionsApi';
import { isValidArray, splitStringToArray } from "../../utils/Helper";
import Card from "../../components/card/Card";
import moment from "moment";
import Loading from "../../components/loading/Loading";

const Tag = () => {

    let { name } = useParams();

    const { data, isError, isLoading } = useGetEmotionsByTagQuery({ tag: name });

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
        <MainLayout>
            <div>
                <header className={`${styles.crayons_card} ${styles.branded}`}>
                    <div className="flex">
                        <div className="flex flex-col w-100 justify-center">
                            <div className="flex justify-between items-center">
                                <h1 className="crayons-title">
                                    <span className="opacity-50">#</span>
                                    {name}
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    {isLoading ? (
                        <Loading
                            fullScreen={false}
                            quantityDot={3}
                            className={styles.loading}
                        />
                    ) : <>{_html}</>
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default Tag;