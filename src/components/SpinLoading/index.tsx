import ReactLoading, { LoadingProps } from "react-loading";

interface SpinLoadingProps {
  typeLoading: "spin" | "balls" | "cubes";
  color: string;
}

export const SpinLoading = ({ typeLoading, color }: SpinLoadingProps) => {
  return (
    <ReactLoading type={typeLoading} color={color} width={15} height={15} />
  );
};
