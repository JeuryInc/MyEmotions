import { useState } from "react";
import MainLayout from "../../components/layout/mainLayout/MainLayout";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Input from "../../components/input/Input";
import styles from "./Emotion.module.scss";
import Button from "../../components/button/Button";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useCreateEmotionMutation } from "../../services/EmotionsApi";
import { convertToHTML } from 'draft-convert';
import { useNavigate } from "react-router-dom";
import { EMOTION_DETAILS } from "../../navigation/Routes";

const Emotion = () => {
    const navigate = useNavigate();

    const redirect_emotion_detail = (id: string) => {
        navigate(`${EMOTION_DETAILS}/${id}`);
    };

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const { register, handleSubmit,
        formState: { errors } } = useForm();

    const [createEmotion, { isError, isLoading }] = useCreateEmotionMutation();

    const [tags, setTags] = useState([]);

    const [isPublic, setIsPublic] = useState(false);

    toast.configure();

    const onSubmit = (model: any) => {
        model.tags = tags;
        model.content = convertToHTML(editorState.getCurrentContent());
        model.isPublic = isPublic;

        if (!isError && !isLoading) {
            createEmotion(model)
                .then((response: any) => {
                    if (response?.data) {
                        toast.success("Emotion registred", { autoClose: 3000 }); 
                        redirect_emotion_detail(response?.data?.id);
                    }
                })
                .catch((error: any) => {
                    toast.error(error, { autoClose: 3000 });
                });
        }
    };

    return (
        <MainLayout>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <label className={styles.publicemotion}>
                            <input type="checkbox" name="isPublic" checked={isPublic} onChange={(e) => { setIsPublic(!isPublic) }} />
                             Is a public emotion?</label>
                    </div>

                    <Input label="What do you want to write about today?"
                        className={styles.subject}
                        name='title'
                        register={register}
                        validation={{
                            required: {
                                value: true,
                                message: "This field is required",
                            }
                        }}
                        errorText={errors.subject?.message}
                        required={true} />

                    <Editor
                        editorState={editorState}
                        placeholder={"Tell us in details what happened"}
                        wrapperClassName={styles.wrapper_editor}
                        editorClassName={styles.textbox_editor}
                        onEditorStateChange={(e) => { setEditorState(e) }}
                    />

                    <ReactTagInput
                        tags={tags}
                        placeholder={"Which tags best describe your emotion? (write and press enter)"}
                        onChange={(newTags: any) => setTags(newTags)} 
                    />

                    <Button text="Create emotion"
                        className={styles.btn_create_emotion}
                        isLoading={isLoading}
                        btnType="submit"
                        disabled={isLoading} />
                </form>
            </div>
        </MainLayout>
    )
}

export default Emotion;