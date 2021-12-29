import { openModal } from "../redux/slices/ModalSlice";
import BUTTON_SIZE from "../enums/ButtonSize";
import { ModalHandler } from "../models/ModalHandlerModels"; 
import { ReactChild } from "react";
import { Dispatch } from "@reduxjs/toolkit";
 
/**
 * Show Custom Modal 
 *
 * @params {any} dispatch - Redux dispatch instance.
 * @params {text} title - title of the modal.
 * @params {text} subtitle - subtitle of the modal.
 * @params {text} text - text of the modal.
 */
const showModal = (dispatch: Dispatch<any>, title: string, text: string, subtitle?: ReactChild) => { 
  return dispatch(
    openModal(
      new ModalHandler(
        title,
        "Header",
        text,
        BUTTON_SIZE.MEDIUM
      )
    )
  );
};

export { showModal };
