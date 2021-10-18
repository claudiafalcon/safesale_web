/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      nombre
      tipo
      propietario
      location {
        lat
        lon
      }
      descripcion
      caracteristicas
      precio
      recamaras
      wc
      baths
      asesor
      construccion_m2
      amenidades
      estacionamientos
      localidad
      inventario
      propertyGeohash
      terreno_m2
      direccion
      creacion
      createdAt
      propertyHashKey
      cp
      edad
      pais
      entidad
      status
      video
      photo
      galery {
        bucket
        region
        key
      }
      updatedAt
      favs {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      nombre
      tipo
      propietario
      location {
        lat
        lon
      }
      descripcion
      caracteristicas
      precio
      recamaras
      wc
      baths
      asesor
      construccion_m2
      amenidades
      estacionamientos
      localidad
      inventario
      propertyGeohash
      terreno_m2
      direccion
      creacion
      createdAt
      propertyHashKey
      cp
      edad
      pais
      entidad
      status
      video
      photo
      galery {
        bucket
        region
        key
      }
      updatedAt
      favs {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      nombre
      tipo
      propietario
      location {
        lat
        lon
      }
      descripcion
      caracteristicas
      precio
      recamaras
      wc
      baths
      asesor
      construccion_m2
      amenidades
      estacionamientos
      localidad
      inventario
      propertyGeohash
      terreno_m2
      direccion
      creacion
      createdAt
      propertyHashKey
      cp
      edad
      pais
      entidad
      status
      video
      photo
      galery {
        bucket
        region
        key
      }
      updatedAt
      favs {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const createAlert = /* GraphQL */ `
  mutation CreateAlert(
    $input: CreateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    createAlert(input: $input, condition: $condition) {
      id
      searchCriteria
      amenidades
      tipo
      recamaras
      estacionamientos
      baths
      terreno_m2
      construccion_m2
      precio_from
      precio_to
      createdAt
      updatedAt
      owner
      user {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateAlert = /* GraphQL */ `
  mutation UpdateAlert(
    $input: UpdateAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    updateAlert(input: $input, condition: $condition) {
      id
      searchCriteria
      amenidades
      tipo
      recamaras
      estacionamientos
      baths
      terreno_m2
      construccion_m2
      precio_from
      precio_to
      createdAt
      updatedAt
      owner
      user {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteAlert = /* GraphQL */ `
  mutation DeleteAlert(
    $input: DeleteAlertInput!
    $condition: ModelAlertConditionInput
  ) {
    deleteAlert(input: $input, condition: $condition) {
      id
      searchCriteria
      amenidades
      tipo
      recamaras
      estacionamientos
      baths
      terreno_m2
      construccion_m2
      precio_from
      precio_to
      createdAt
      updatedAt
      owner
      user {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      alerts {
        nextToken
      }
      devices {
        nextToken
      }
      favs {
        nextToken
      }
      messages {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      alerts {
        nextToken
      }
      devices {
        nextToken
      }
      favs {
        nextToken
      }
      messages {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      createdAt
      updatedAt
      alerts {
        nextToken
      }
      devices {
        nextToken
      }
      favs {
        nextToken
      }
      messages {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      platform
      vendorid
      token
      createdAt
      updatedAt
      owner {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      platform
      vendorid
      token
      createdAt
      updatedAt
      owner {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      platform
      vendorid
      token
      createdAt
      updatedAt
      owner {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;
export const createUserFavs = /* GraphQL */ `
  mutation CreateUserFavs(
    $input: CreateUserFavsInput!
    $condition: ModelUserFavsConditionInput
  ) {
    createUserFavs(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      property {
        id
        nombre
        tipo
        propietario
        descripcion
        caracteristicas
        precio
        recamaras
        wc
        baths
        asesor
        construccion_m2
        amenidades
        estacionamientos
        localidad
        inventario
        propertyGeohash
        terreno_m2
        direccion
        creacion
        createdAt
        propertyHashKey
        cp
        edad
        pais
        entidad
        status
        video
        photo
        updatedAt
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const updateUserFavs = /* GraphQL */ `
  mutation UpdateUserFavs(
    $input: UpdateUserFavsInput!
    $condition: ModelUserFavsConditionInput
  ) {
    updateUserFavs(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      property {
        id
        nombre
        tipo
        propietario
        descripcion
        caracteristicas
        precio
        recamaras
        wc
        baths
        asesor
        construccion_m2
        amenidades
        estacionamientos
        localidad
        inventario
        propertyGeohash
        terreno_m2
        direccion
        creacion
        createdAt
        propertyHashKey
        cp
        edad
        pais
        entidad
        status
        video
        photo
        updatedAt
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const deleteUserFavs = /* GraphQL */ `
  mutation DeleteUserFavs(
    $input: DeleteUserFavsInput!
    $condition: ModelUserFavsConditionInput
  ) {
    deleteUserFavs(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      property {
        id
        nombre
        tipo
        propietario
        descripcion
        caracteristicas
        precio
        recamaras
        wc
        baths
        asesor
        construccion_m2
        amenidades
        estacionamientos
        localidad
        inventario
        propertyGeohash
        terreno_m2
        direccion
        creacion
        createdAt
        propertyHashKey
        cp
        edad
        pais
        entidad
        status
        video
        photo
        updatedAt
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const createConvo = /* GraphQL */ `
  mutation CreateConvo(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConvo(input: $input, condition: $condition) {
      id
      name
      type
      members
      schedulerdate
      scheduler
      createdAt
      updatedAt
      property {
        id
        nombre
        tipo
        propietario
        descripcion
        caracteristicas
        precio
        recamaras
        wc
        baths
        asesor
        construccion_m2
        amenidades
        estacionamientos
        localidad
        inventario
        propertyGeohash
        terreno_m2
        direccion
        creacion
        createdAt
        propertyHashKey
        cp
        edad
        pais
        entidad
        status
        video
        photo
        updatedAt
      }
      messages {
        nextToken
      }
      associated {
        nextToken
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      authorId
      guestmail
      content
      messageConversationId
      unread
      createdAt
      updatedAt
      author {
        id
        username
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        type
        members
        schedulerdate
        scheduler
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      authorId
      guestmail
      content
      messageConversationId
      unread
      createdAt
      updatedAt
      author {
        id
        username
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        type
        members
        schedulerdate
        scheduler
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      authorId
      guestmail
      content
      messageConversationId
      unread
      createdAt
      updatedAt
      author {
        id
        username
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        type
        members
        schedulerdate
        scheduler
        createdAt
        updatedAt
      }
    }
  }
`;
export const createConvoLink = /* GraphQL */ `
  mutation CreateConvoLink(
    $input: CreateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    createConvoLink(input: $input, condition: $condition) {
      id
      convoLinkUserId
      convoLinkConversationId
      guestmail
      createdAt
      updatedAt
      user {
        id
        username
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        type
        members
        schedulerdate
        scheduler
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateConvoLink = /* GraphQL */ `
  mutation UpdateConvoLink(
    $input: UpdateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    updateConvoLink(input: $input, condition: $condition) {
      id
      convoLinkUserId
      convoLinkConversationId
      guestmail
      createdAt
      updatedAt
      user {
        id
        username
        createdAt
        updatedAt
      }
      conversation {
        id
        name
        type
        members
        schedulerdate
        scheduler
        createdAt
        updatedAt
      }
    }
  }
`;
