import { useParams } from "react-router-dom";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import styles from "./Tag.module.scss";
import { useGetEmotionsByTagQuery } from '../../services/EmotionsApi';
import { isValidArray } from "../../utils/Helper";
import Card from "../../components/card/Card";
import moment from "moment";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import { EMOTION_DETAILS } from "../../navigation/Routes";

const Tag = () => {
    let { name } = useParams();

    const { data, isLoading } = useGetEmotionsByTagQuery({ tag: name });

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
                        <Link to={`${EMOTION_DETAILS}/${emotion.id}`} >
                            <h1 className={styles.title}>{emotion.title}</h1>
                        </Link>
                        {emotion.tags.map((element: string) => {
                            return <a href={`/t/${element}`} key={element}><span className={styles.tag}>{element}</span></a>
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
                            <div className={`${styles.tag_container}`}>
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