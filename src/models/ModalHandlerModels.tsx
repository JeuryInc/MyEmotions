import BUTTON_SIZE from "../enums/ButtonSize";

class ModalHandler {
  title: string;
  header:  string;
  size: number;
  isValid: boolean;
  show: boolean;
  callback: null;
  body: string;
  constructor(
    title = "",
    header = "",
    body =  "",
    size = BUTTON_SIZE.NORMAL,
    callback = null
  ) {
    this.title = title;
    this.header = header;
    this.body = body;
    this.size = size;
    this.isValid = !!header || !!body;
    this.show = true;
    this.callback = callback;
  }
}

export { ModalHandler };
