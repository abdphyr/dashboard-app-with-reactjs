import { CustomModeIcon } from "./type";
import { CustomPathStrokeSC } from "./info";

const ProfIcon: CustomModeIcon = ({ isDark }) => {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CustomPathStrokeSC isDark={isDark} d="M1 1L5.28571 5L9 1" stroke-linecap="round" />
    </svg>
  )
}
export default ProfIcon