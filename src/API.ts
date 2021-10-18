/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertyInput = {
  id?: string | null,
  nombre: string,
  tipo: string,
  propietario: string,
  location: LocationInput,
  descripcion?: string | null,
  caracteristicas?: string | null,
  precio?: string | null,
  recamaras?: number | null,
  wc?: number | null,
  baths?: number | null,
  asesor?: string | null,
  construccion_m2?: number | null,
  amenidades?: string | null,
  estacionamientos?: number | null,
  localidad?: string | null,
  inventario?: number | null,
  propertyGeohash?: string | null,
  terreno_m2?: number | null,
  direccion?: string | null,
  creacion?: string | null,
  createdAt?: string | null,
  propertyHashKey?: string | null,
  cp?: string | null,
  edad?: number | null,
  pais?: string | null,
  entidad?: string | null,
  status?: string | null,
  video?: boolean | null,
  photo?: boolean | null,
  galery?: Array< S3ObjectInput | null > | null,
};

export type LocationInput = {
  lat: number,
  lon: number,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelPropertyConditionInput = {
  nombre?: ModelStringInput | null,
  tipo?: ModelStringInput | null,
  propietario?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  caracteristicas?: ModelStringInput | null,
  precio?: ModelStringInput | null,
  recamaras?: ModelIntInput | null,
  wc?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  asesor?: ModelStringInput | null,
  construccion_m2?: ModelFloatInput | null,
  amenidades?: ModelStringInput | null,
  estacionamientos?: ModelIntInput | null,
  localidad?: ModelStringInput | null,
  inventario?: ModelIntInput | null,
  propertyGeohash?: ModelStringInput | null,
  terreno_m2?: ModelFloatInput | null,
  direccion?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  propertyHashKey?: ModelStringInput | null,
  cp?: ModelStringInput | null,
  edad?: ModelIntInput | null,
  pais?: ModelStringInput | null,
  entidad?: ModelStringInput | null,
  status?: ModelStringInput | null,
  video?: ModelBooleanInput | null,
  photo?: ModelBooleanInput | null,
  and?: Array< ModelPropertyConditionInput | null > | null,
  or?: Array< ModelPropertyConditionInput | null > | null,
  not?: ModelPropertyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Property = {
  __typename: "Property",
  id?: string,
  nombre?: string,
  tipo?: string,
  propietario?: string,
  location?: Location,
  descripcion?: string | null,
  caracteristicas?: string | null,
  precio?: string | null,
  recamaras?: number | null,
  wc?: number | null,
  baths?: number | null,
  asesor?: string | null,
  construccion_m2?: number | null,
  amenidades?: string | null,
  estacionamientos?: number | null,
  localidad?: string | null,
  inventario?: number | null,
  propertyGeohash?: string | null,
  terreno_m2?: number | null,
  direccion?: string | null,
  creacion?: string | null,
  createdAt?: string,
  propertyHashKey?: string | null,
  cp?: string | null,
  edad?: number | null,
  pais?: string | null,
  entidad?: string | null,
  status?: string | null,
  video?: boolean | null,
  photo?: boolean | null,
  galery?:  Array<S3Object | null > | null,
  updatedAt?: string,
  favs?: ModelUserFavsConnection,
  conversations?: ModelConversationConnection,
};

export type Location = {
  __typename: "Location",
  lat?: number,
  lon?: number,
};

export type S3Object = {
  __typename: "S3Object",
  bucket?: string,
  region?: string,
  key?: string,
};

export type ModelUserFavsConnection = {
  __typename: "ModelUserFavsConnection",
  items?:  Array<UserFavs | null > | null,
  nextToken?: string | null,
};

export type UserFavs = {
  __typename: "UserFavs",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  property?: Property,
  user?: User,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  createdAt?: string,
  updatedAt?: string,
  alerts?: ModelAlertConnection,
  devices?: ModelDeviceConnection,
  favs?: ModelUserFavsConnection,
  messages?: ModelMessageConnection,
  conversations?: ModelConvoLinkConnection,
};

export type ModelAlertConnection = {
  __typename: "ModelAlertConnection",
  items?:  Array<Alert | null > | null,
  nextToken?: string | null,
};

export type Alert = {
  __typename: "Alert",
  id?: string,
  searchCriteria?: string,
  amenidades?: string | null,
  tipo?: string | null,
  recamaras?: number | null,
  estacionamientos?: number | null,
  baths?: number | null,
  terreno_m2?: number | null,
  construccion_m2?: number | null,
  precio_from?: number | null,
  precio_to?: number | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
  user?: User,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items?:  Array<Device | null > | null,
  nextToken?: string | null,
};

export type Device = {
  __typename: "Device",
  id?: string,
  platform?: string | null,
  vendorid?: string | null,
  token?: string | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: User,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  authorId?: string,
  guestmail?: string | null,
  content?: string,
  messageConversationId?: string,
  unread?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  author?: User,
  conversation?: Conversation,
};

export type Conversation = {
  __typename: "Conversation",
  id?: string,
  name?: string,
  type?: string,
  members?: Array< string >,
  schedulerdate?: string | null,
  scheduler?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  property?: Property,
  messages?: ModelMessageConnection,
  associated?: ModelConvoLinkConnection,
};

export type ModelConvoLinkConnection = {
  __typename: "ModelConvoLinkConnection",
  items?:  Array<ConvoLink | null > | null,
  nextToken?: string | null,
};

export type ConvoLink = {
  __typename: "ConvoLink",
  id?: string,
  convoLinkUserId?: string | null,
  convoLinkConversationId?: string,
  guestmail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User,
  conversation?: Conversation,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items?:  Array<Conversation | null > | null,
  nextToken?: string | null,
};

export type UpdatePropertyInput = {
  id: string,
  nombre?: string | null,
  tipo?: string | null,
  propietario?: string | null,
  location?: LocationInput | null,
  descripcion?: string | null,
  caracteristicas?: string | null,
  precio?: string | null,
  recamaras?: number | null,
  wc?: number | null,
  baths?: number | null,
  asesor?: string | null,
  construccion_m2?: number | null,
  amenidades?: string | null,
  estacionamientos?: number | null,
  localidad?: string | null,
  inventario?: number | null,
  propertyGeohash?: string | null,
  terreno_m2?: number | null,
  direccion?: string | null,
  creacion?: string | null,
  createdAt?: string | null,
  propertyHashKey?: string | null,
  cp?: string | null,
  edad?: number | null,
  pais?: string | null,
  entidad?: string | null,
  status?: string | null,
  video?: boolean | null,
  photo?: boolean | null,
  galery?: Array< S3ObjectInput | null > | null,
};

export type DeletePropertyInput = {
  id: string,
};

export type CreateAlertInput = {
  id?: string | null,
  searchCriteria: string,
  amenidades?: string | null,
  tipo?: string | null,
  recamaras?: number | null,
  estacionamientos?: number | null,
  baths?: number | null,
  terreno_m2?: number | null,
  construccion_m2?: number | null,
  precio_from?: number | null,
  precio_to?: number | null,
  alertUserId?: string | null,
};

export type ModelAlertConditionInput = {
  searchCriteria?: ModelStringInput | null,
  amenidades?: ModelStringInput | null,
  tipo?: ModelStringInput | null,
  recamaras?: ModelIntInput | null,
  estacionamientos?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  terreno_m2?: ModelIntInput | null,
  construccion_m2?: ModelIntInput | null,
  precio_from?: ModelIntInput | null,
  precio_to?: ModelIntInput | null,
  and?: Array< ModelAlertConditionInput | null > | null,
  or?: Array< ModelAlertConditionInput | null > | null,
  not?: ModelAlertConditionInput | null,
};

export type UpdateAlertInput = {
  id: string,
  searchCriteria?: string | null,
  amenidades?: string | null,
  tipo?: string | null,
  recamaras?: number | null,
  estacionamientos?: number | null,
  baths?: number | null,
  terreno_m2?: number | null,
  construccion_m2?: number | null,
  precio_from?: number | null,
  precio_to?: number | null,
  alertUserId?: string | null,
};

export type DeleteAlertInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDeviceInput = {
  id?: string | null,
  platform?: string | null,
  vendorid?: string | null,
  token?: string | null,
  deviceOwnerId?: string | null,
};

export type ModelDeviceConditionInput = {
  platform?: ModelStringInput | null,
  vendorid?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceInput = {
  id: string,
  platform?: string | null,
  vendorid?: string | null,
  token?: string | null,
  deviceOwnerId?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type CreateUserFavsInput = {
  id?: string | null,
  userFavsPropertyId?: string | null,
  userFavsUserId?: string | null,
};

export type ModelUserFavsConditionInput = {
  and?: Array< ModelUserFavsConditionInput | null > | null,
  or?: Array< ModelUserFavsConditionInput | null > | null,
  not?: ModelUserFavsConditionInput | null,
};

export type UpdateUserFavsInput = {
  id: string,
  userFavsPropertyId?: string | null,
  userFavsUserId?: string | null,
};

export type DeleteUserFavsInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
  name: string,
  type: string,
  members: Array< string >,
  schedulerdate?: string | null,
  scheduler?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  conversationPropertyId?: string | null,
};

export type ModelConversationConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  schedulerdate?: ModelStringInput | null,
  scheduler?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type CreateMessageInput = {
  id?: string | null,
  authorId: string,
  guestmail?: string | null,
  content: string,
  messageConversationId: string,
  unread?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMessageConditionInput = {
  authorId?: ModelIDInput | null,
  guestmail?: ModelStringInput | null,
  content?: ModelStringInput | null,
  messageConversationId?: ModelIDInput | null,
  unread?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  authorId?: string | null,
  guestmail?: string | null,
  content?: string | null,
  messageConversationId?: string | null,
  unread?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateConvoLinkInput = {
  id?: string | null,
  convoLinkUserId?: string | null,
  convoLinkConversationId: string,
  guestmail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelConvoLinkConditionInput = {
  convoLinkUserId?: ModelIDInput | null,
  convoLinkConversationId?: ModelIDInput | null,
  guestmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConvoLinkConditionInput | null > | null,
  or?: Array< ModelConvoLinkConditionInput | null > | null,
  not?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkInput = {
  id: string,
  convoLinkUserId?: string | null,
  convoLinkConversationId?: string | null,
  guestmail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPropertyPointConnection = {
  __typename: "ModelPropertyPointConnection",
  items?:  Array<Property | null > | null,
  total?: number | null,
  nextToken?: string | null,
};

export type CriteriaInput = {
  searchCriteria: string,
  amenidades?: string | null,
  tipo?: string | null,
  recamaras?: number | null,
  estacionamientos?: number | null,
  baths?: number | null,
  terreno_m2?: number | null,
  construccion_m2?: number | null,
  precio_from?: number | null,
  precio_to?: number | null,
};

export type ModelPropertyFilterInput = {
  id?: ModelIDInput | null,
  nombre?: ModelStringInput | null,
  tipo?: ModelStringInput | null,
  propietario?: ModelStringInput | null,
  descripcion?: ModelStringInput | null,
  caracteristicas?: ModelStringInput | null,
  precio?: ModelStringInput | null,
  recamaras?: ModelIntInput | null,
  wc?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  asesor?: ModelStringInput | null,
  construccion_m2?: ModelFloatInput | null,
  amenidades?: ModelStringInput | null,
  estacionamientos?: ModelIntInput | null,
  localidad?: ModelStringInput | null,
  inventario?: ModelIntInput | null,
  propertyGeohash?: ModelStringInput | null,
  terreno_m2?: ModelFloatInput | null,
  direccion?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  propertyHashKey?: ModelStringInput | null,
  cp?: ModelStringInput | null,
  edad?: ModelIntInput | null,
  pais?: ModelStringInput | null,
  entidad?: ModelStringInput | null,
  status?: ModelStringInput | null,
  video?: ModelBooleanInput | null,
  photo?: ModelBooleanInput | null,
  and?: Array< ModelPropertyFilterInput | null > | null,
  or?: Array< ModelPropertyFilterInput | null > | null,
  not?: ModelPropertyFilterInput | null,
};

export type ModelPropertyConnection = {
  __typename: "ModelPropertyConnection",
  items?:  Array<Property | null > | null,
  nextToken?: string | null,
};

export type SearchablePropertyFilterInput = {
  id?: SearchableIDFilterInput | null,
  nombre?: SearchableStringFilterInput | null,
  tipo?: SearchableStringFilterInput | null,
  propietario?: SearchableStringFilterInput | null,
  descripcion?: SearchableStringFilterInput | null,
  caracteristicas?: SearchableStringFilterInput | null,
  precio?: SearchableStringFilterInput | null,
  recamaras?: SearchableIntFilterInput | null,
  wc?: SearchableIntFilterInput | null,
  baths?: SearchableIntFilterInput | null,
  asesor?: SearchableStringFilterInput | null,
  construccion_m2?: SearchableFloatFilterInput | null,
  amenidades?: SearchableStringFilterInput | null,
  estacionamientos?: SearchableIntFilterInput | null,
  localidad?: SearchableStringFilterInput | null,
  inventario?: SearchableIntFilterInput | null,
  propertyGeohash?: SearchableStringFilterInput | null,
  terreno_m2?: SearchableFloatFilterInput | null,
  direccion?: SearchableStringFilterInput | null,
  creacion?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  propertyHashKey?: SearchableStringFilterInput | null,
  cp?: SearchableStringFilterInput | null,
  edad?: SearchableIntFilterInput | null,
  pais?: SearchableStringFilterInput | null,
  entidad?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  video?: SearchableBooleanFilterInput | null,
  photo?: SearchableBooleanFilterInput | null,
  and?: Array< SearchablePropertyFilterInput | null > | null,
  or?: Array< SearchablePropertyFilterInput | null > | null,
  not?: SearchablePropertyFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchablePropertySortInput = {
  field?: SearchablePropertySortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePropertySortableFields {
  id = "id",
  nombre = "nombre",
  tipo = "tipo",
  propietario = "propietario",
  descripcion = "descripcion",
  caracteristicas = "caracteristicas",
  precio = "precio",
  recamaras = "recamaras",
  wc = "wc",
  baths = "baths",
  asesor = "asesor",
  construccion_m2 = "construccion_m2",
  amenidades = "amenidades",
  estacionamientos = "estacionamientos",
  localidad = "localidad",
  inventario = "inventario",
  propertyGeohash = "propertyGeohash",
  terreno_m2 = "terreno_m2",
  direccion = "direccion",
  creacion = "creacion",
  createdAt = "createdAt",
  propertyHashKey = "propertyHashKey",
  cp = "cp",
  edad = "edad",
  pais = "pais",
  entidad = "entidad",
  status = "status",
  video = "video",
  photo = "photo",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchablePropertyConnection = {
  __typename: "SearchablePropertyConnection",
  items?:  Array<Property | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type ModelAlertFilterInput = {
  id?: ModelIDInput | null,
  searchCriteria?: ModelStringInput | null,
  amenidades?: ModelStringInput | null,
  tipo?: ModelStringInput | null,
  recamaras?: ModelIntInput | null,
  estacionamientos?: ModelIntInput | null,
  baths?: ModelIntInput | null,
  terreno_m2?: ModelIntInput | null,
  construccion_m2?: ModelIntInput | null,
  precio_from?: ModelIntInput | null,
  precio_to?: ModelIntInput | null,
  and?: Array< ModelAlertFilterInput | null > | null,
  or?: Array< ModelAlertFilterInput | null > | null,
  not?: ModelAlertFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null,
  username?: SearchableStringFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  id = "id",
  username = "username",
}


export type SearchableUserConnection = {
  __typename: "SearchableUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  platform?: ModelStringInput | null,
  vendorid?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelConvoLinkFilterInput = {
  id?: ModelIDInput | null,
  convoLinkUserId?: ModelIDInput | null,
  convoLinkConversationId?: ModelIDInput | null,
  guestmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelConvoLinkFilterInput | null > | null,
  or?: Array< ModelConvoLinkFilterInput | null > | null,
  not?: ModelConvoLinkFilterInput | null,
};

export type CreatePropertyMutationVariables = {
  input?: CreatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type CreatePropertyMutation = {
  createProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePropertyMutationVariables = {
  input?: UpdatePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type UpdatePropertyMutation = {
  updateProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePropertyMutationVariables = {
  input?: DeletePropertyInput,
  condition?: ModelPropertyConditionInput | null,
};

export type DeletePropertyMutation = {
  deleteProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateAlertMutationVariables = {
  input?: CreateAlertInput,
  condition?: ModelAlertConditionInput | null,
};

export type CreateAlertMutation = {
  createAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAlertMutationVariables = {
  input?: UpdateAlertInput,
  condition?: ModelAlertConditionInput | null,
};

export type UpdateAlertMutation = {
  updateAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAlertMutationVariables = {
  input?: DeleteAlertInput,
  condition?: ModelAlertConditionInput | null,
};

export type DeleteAlertMutation = {
  deleteAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateDeviceMutationVariables = {
  input?: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input?: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input?: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateUserFavsMutationVariables = {
  input?: CreateUserFavsInput,
  condition?: ModelUserFavsConditionInput | null,
};

export type CreateUserFavsMutation = {
  createUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserFavsMutationVariables = {
  input?: UpdateUserFavsInput,
  condition?: ModelUserFavsConditionInput | null,
};

export type UpdateUserFavsMutation = {
  updateUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserFavsMutationVariables = {
  input?: DeleteUserFavsInput,
  condition?: ModelUserFavsConditionInput | null,
};

export type DeleteUserFavsMutation = {
  deleteUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateConvoMutationVariables = {
  input?: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConvoMutation = {
  createConvo?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    type: string,
    members: Array< string >,
    schedulerdate?: string | null,
    scheduler?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    authorId: string,
    guestmail?: string | null,
    content: string,
    messageConversationId: string,
    unread?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    authorId: string,
    guestmail?: string | null,
    content: string,
    messageConversationId: string,
    unread?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    authorId: string,
    guestmail?: string | null,
    content: string,
    messageConversationId: string,
    unread?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateConvoLinkMutationVariables = {
  input?: CreateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type CreateConvoLinkMutation = {
  createConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    convoLinkUserId?: string | null,
    convoLinkConversationId: string,
    guestmail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateConvoLinkMutationVariables = {
  input?: UpdateConvoLinkInput,
  condition?: ModelConvoLinkConditionInput | null,
};

export type UpdateConvoLinkMutation = {
  updateConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    convoLinkUserId?: string | null,
    convoLinkConversationId: string,
    guestmail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type NearbyPropertiesQueryVariables = {
  location?: LocationInput,
  m?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NearbyPropertiesQuery = {
  nearbyProperties?:  {
    __typename: "ModelPropertyPointConnection",
    items?:  Array< {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type SearchPropertiesQueryVariables = {
  criteria?: CriteriaInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchPropertiesQuery = {
  searchProperties?:  {
    __typename: "ModelPropertyPointConnection",
    items?:  Array< {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    total?: number | null,
    nextToken?: string | null,
  } | null,
};

export type GetPropertyQueryVariables = {
  id?: string,
};

export type GetPropertyQuery = {
  getProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPropertysQueryVariables = {
  filter?: ModelPropertyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertysQuery = {
  listPropertys?:  {
    __typename: "ModelPropertyConnection",
    items?:  Array< {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchPropertysQueryVariables = {
  filter?: SearchablePropertyFilterInput | null,
  sort?: SearchablePropertySortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchPropertysQuery = {
  searchPropertys?:  {
    __typename: "SearchablePropertyConnection",
    items?:  Array< {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type GetAlertQueryVariables = {
  id?: string,
};

export type GetAlertQuery = {
  getAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAlertsQueryVariables = {
  filter?: ModelAlertFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlertsQuery = {
  listAlerts?:  {
    __typename: "ModelAlertConnection",
    items?:  Array< {
      __typename: "Alert",
      id: string,
      searchCriteria: string,
      amenidades?: string | null,
      tipo?: string | null,
      recamaras?: number | null,
      estacionamientos?: number | null,
      baths?: number | null,
      terreno_m2?: number | null,
      construccion_m2?: number | null,
      precio_from?: number | null,
      precio_to?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: SearchableUserSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id?: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items?:  Array< {
      __typename: "Device",
      id: string,
      platform?: string | null,
      vendorid?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConvoQueryVariables = {
  id?: string,
};

export type GetConvoQuery = {
  getConvo?:  {
    __typename: "Conversation",
    id: string,
    name: string,
    type: string,
    members: Array< string >,
    schedulerdate?: string | null,
    scheduler?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    associated?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetConvoLinkQueryVariables = {
  id?: string,
};

export type GetConvoLinkQuery = {
  getConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    convoLinkUserId?: string | null,
    convoLinkConversationId: string,
    guestmail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListConvoLinksQueryVariables = {
  filter?: ModelConvoLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConvoLinksQuery = {
  listConvoLinks?:  {
    __typename: "ModelConvoLinkConnection",
    items?:  Array< {
      __typename: "ConvoLink",
      id: string,
      convoLinkUserId?: string | null,
      convoLinkConversationId: string,
      guestmail?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      },
      conversation:  {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateConvoLinkSubscriptionVariables = {
  convoLinkUserId?: string,
};

export type OnCreateConvoLinkSubscription = {
  onCreateConvoLink?:  {
    __typename: "ConvoLink",
    id: string,
    convoLinkUserId?: string | null,
    convoLinkConversationId: string,
    guestmail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  messageConversationId?: string,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    authorId: string,
    guestmail?: string | null,
    content: string,
    messageConversationId: string,
    unread?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    author?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    conversation:  {
      __typename: "Conversation",
      id: string,
      name: string,
      type: string,
      members: Array< string >,
      schedulerdate?: string | null,
      scheduler?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      property?:  {
        __typename: "Property",
        id: string,
        nombre: string,
        tipo: string,
        propietario: string,
        descripcion?: string | null,
        caracteristicas?: string | null,
        precio?: string | null,
        recamaras?: number | null,
        wc?: number | null,
        baths?: number | null,
        asesor?: string | null,
        construccion_m2?: number | null,
        amenidades?: string | null,
        estacionamientos?: number | null,
        localidad?: string | null,
        inventario?: number | null,
        propertyGeohash?: string | null,
        terreno_m2?: number | null,
        direccion?: string | null,
        creacion?: string | null,
        createdAt: string,
        propertyHashKey?: string | null,
        cp?: string | null,
        edad?: number | null,
        pais?: string | null,
        entidad?: string | null,
        status?: string | null,
        video?: boolean | null,
        photo?: boolean | null,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      associated?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreatePropertySubscription = {
  onCreateProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePropertySubscription = {
  onUpdateProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePropertySubscription = {
  onDeleteProperty?:  {
    __typename: "Property",
    id: string,
    nombre: string,
    tipo: string,
    propietario: string,
    location:  {
      __typename: "Location",
      lat: number,
      lon: number,
    },
    descripcion?: string | null,
    caracteristicas?: string | null,
    precio?: string | null,
    recamaras?: number | null,
    wc?: number | null,
    baths?: number | null,
    asesor?: string | null,
    construccion_m2?: number | null,
    amenidades?: string | null,
    estacionamientos?: number | null,
    localidad?: string | null,
    inventario?: number | null,
    propertyGeohash?: string | null,
    terreno_m2?: number | null,
    direccion?: string | null,
    creacion?: string | null,
    createdAt: string,
    propertyHashKey?: string | null,
    cp?: string | null,
    edad?: number | null,
    pais?: string | null,
    entidad?: string | null,
    status?: string | null,
    video?: boolean | null,
    photo?: boolean | null,
    galery?:  Array< {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null > | null,
    updatedAt: string,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items?:  Array< {
        __typename: "Conversation",
        id: string,
        name: string,
        type: string,
        members: Array< string >,
        schedulerdate?: string | null,
        scheduler?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateAlertSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAlertSubscription = {
  onCreateAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAlertSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAlertSubscription = {
  onUpdateAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAlertSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAlertSubscription = {
  onDeleteAlert?:  {
    __typename: "Alert",
    id: string,
    searchCriteria: string,
    amenidades?: string | null,
    tipo?: string | null,
    recamaras?: number | null,
    estacionamientos?: number | null,
    baths?: number | null,
    terreno_m2?: number | null,
    construccion_m2?: number | null,
    precio_from?: number | null,
    precio_to?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    createdAt: string,
    updatedAt: string,
    alerts?:  {
      __typename: "ModelAlertConnection",
      items?:  Array< {
        __typename: "Alert",
        id: string,
        searchCriteria: string,
        amenidades?: string | null,
        tipo?: string | null,
        recamaras?: number | null,
        estacionamientos?: number | null,
        baths?: number | null,
        terreno_m2?: number | null,
        construccion_m2?: number | null,
        precio_from?: number | null,
        precio_to?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    devices?:  {
      __typename: "ModelDeviceConnection",
      items?:  Array< {
        __typename: "Device",
        id: string,
        platform?: string | null,
        vendorid?: string | null,
        token?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    favs?:  {
      __typename: "ModelUserFavsConnection",
      items?:  Array< {
        __typename: "UserFavs",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        authorId: string,
        guestmail?: string | null,
        content: string,
        messageConversationId: string,
        unread?: boolean | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConvoLinkConnection",
      items?:  Array< {
        __typename: "ConvoLink",
        id: string,
        convoLinkUserId?: string | null,
        convoLinkConversationId: string,
        guestmail?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice?:  {
    __typename: "Device",
    id: string,
    platform?: string | null,
    vendorid?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateUserFavsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserFavsSubscription = {
  onCreateUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserFavsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserFavsSubscription = {
  onUpdateUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserFavsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserFavsSubscription = {
  onDeleteUserFavs?:  {
    __typename: "UserFavs",
    id: string,
    createdAt: string,
    updatedAt: string,
    property?:  {
      __typename: "Property",
      id: string,
      nombre: string,
      tipo: string,
      propietario: string,
      location:  {
        __typename: "Location",
        lat: number,
        lon: number,
      },
      descripcion?: string | null,
      caracteristicas?: string | null,
      precio?: string | null,
      recamaras?: number | null,
      wc?: number | null,
      baths?: number | null,
      asesor?: string | null,
      construccion_m2?: number | null,
      amenidades?: string | null,
      estacionamientos?: number | null,
      localidad?: string | null,
      inventario?: number | null,
      propertyGeohash?: string | null,
      terreno_m2?: number | null,
      direccion?: string | null,
      creacion?: string | null,
      createdAt: string,
      propertyHashKey?: string | null,
      cp?: string | null,
      edad?: number | null,
      pais?: string | null,
      entidad?: string | null,
      status?: string | null,
      video?: boolean | null,
      photo?: boolean | null,
      galery?:  Array< {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null > | null,
      updatedAt: string,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      alerts?:  {
        __typename: "ModelAlertConnection",
        nextToken?: string | null,
      } | null,
      devices?:  {
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
      favs?:  {
        __typename: "ModelUserFavsConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConvoLinkConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
