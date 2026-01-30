export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export type PlacementQuestion = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  level: CefrLevel;
};

export type PlacementTestSpec = {
  id: "msa" | "levantine" | "egyptian";
  title: string;
  subtitle: string;
  questions: PlacementQuestion[]; // must be 20
};
