import { COLORS } from "../constants/colors";

export const ColorMapper = (color: keyof typeof COLORS) => {
  switch (color) {
    case COLORS.blue: {
      return "rgb(211, 229, 239);";
    }
    case COLORS.yellow: {
      return "rgb(253, 236, 200)";
    }
    case COLORS.green: {
      return "rgb(219, 237, 219)";
    }
    case COLORS.orange: {
      return "rgb(250, 222, 201)";
    }
    case COLORS.red: {
      return "rgb(255, 226, 221)";
    }
    default: {
      return "rgba(227, 226, 224, 0.5)";
    }
  }
};
