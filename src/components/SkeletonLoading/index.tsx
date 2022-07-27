import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonLoadingProps {
  countLines?: number;
}

export const SkeletonLoading = ({ countLines = 5 }: SkeletonLoadingProps) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton count={countLines} />
    </SkeletonTheme>
  );
};
