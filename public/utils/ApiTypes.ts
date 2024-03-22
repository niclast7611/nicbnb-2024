export interface Listing {
    id: string;
    photoId: string | null;
    listing: ListingDetails;
    pricingQuote: PricingQuote;
    listingParamOverrides: ListingParamOverrides;
  }
  
  interface ListingDetails {
    id: string;
    title: string;
    titleLocale: string;
    name: string;
    localizedCityName: string;
    city: string;
    avgRatingLocalized: string;
    avgRatingA11yLabel: string;
    contextualPictures: ContextualPicture[];
    coordinate: Coordinate;
    formattedBadges: FormattedBadge[];
    isAutoTranslated: boolean;
    listingObjType: string;
    primaryHostPassport: null;
    pdpType: string;
    roomTypeCategory: string;
    roomTypeId: null;
    structuredContent: StructuredContent;
    tierId: number;
  }
  
  interface ContextualPicture {
    id: string;
    picture: string;
    caption: Caption | null;
  }
  
  interface Caption {
    kickerBadge: null;
    messages: string[];
    textColor: null;
    formattedMessages: null;
  }
  
  interface Coordinate {
    longitude: number;
    latitude: number;
  }
  
  interface FormattedBadge {
    text: string;
    textColor: string;
    style: string;
    loggingContext: LoggingContext;
  }
  
  interface LoggingContext {
    badgeType: string;
  }
  
  interface StructuredContent {
    primaryLine: Line[];
    secondaryLine: Line[];
    mapPrimaryLine: null;
    mapSecondaryLine: Line[];
    mapCategoryInfo: null;
    distance: null;
  }
  
  interface Line {
    type: null;
    headline: null;
    body: string;
    bodyType: null;
    bodyA11yLabel: null;
    fontWeight: null;
  }
  
  interface PricingQuote {
    structuredStayDisplayPrice: StructuredStayDisplayPrice;
  }
  
  interface StructuredStayDisplayPrice {
    primaryLine: PrimaryLine;
    secondaryLine: null;
    explanationData: null;
    explanationDataDisplayPosition: string;
  }
  
  interface PrimaryLine {
    accessibilityLabel: string;
    displayComponentType: string;
    concatQualifierLeft: boolean;
    price?: string;
    discountedPrice?: string;
    originalPrice?: string;
    qualifier: string;
    trailingContent: null;
    shortQualifier: string;
  }
  
  interface ListingParamOverrides {
    adults: number;
    children: number;
    infants: number;
    checkin: string;
    checkout: string;
    causeId: null;
    relaxedAmenityIds: null;
    categoryTag: null;
    pets: number;
    splitStaysUuid: null;
    highlightType: null;
    photoId: null;
  }
  

  export interface Category {
    status: boolean;
    message: string;
    timestamp: number;
    data: CategoryData[];
  }

  export interface CategoryData {
    key: string;
    title: string;
    image: string;
  }