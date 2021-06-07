const initialState = {
  photo: [],
  album: [],
  users: [],
  selectedThumbnail: [],
  isLoading: false,
  findText: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_ALBUM":
      return {
        ...state,
        album: action.payload,
      };
    case "SET_THUMBNAIL":
      return {
        ...state,
        selectedThumbnail: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_FIND_TEXT":
      return {
        ...state,
        findText: action.payload,
      };
    default:
      return state;
  }
}
