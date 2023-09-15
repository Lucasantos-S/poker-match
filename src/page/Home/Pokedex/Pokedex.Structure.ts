export type StepsType = "environment_metch" | "environment_notMetch";

export type IHashSteps = {
  [key in StepsType]: JSX.Element;
};
