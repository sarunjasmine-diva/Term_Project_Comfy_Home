export type ExperimentScreen = 'consent' | 'cart' | 'questionnaire' | 'debrief';

export interface QuestionnaireResponses {
  priceClarity: number; // 1-7
  deliveryFairness: number; // 1-7
  checkoutEase: number; // 1-7
  purchaseIntention: number; // 1-7
  comments?: string;
}
