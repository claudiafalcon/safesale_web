/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConvoLink = /* GraphQL */ `
  subscription OnCreateConvoLink($convoLinkUserId: ID!) {
    onCreateConvoLink(convoLinkUserId: $convoLinkUserId) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($messageConversationId: ID!) {
    onCreateMessage(messageConversationId: $messageConversationId) {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
export const onCreateAlert = /* GraphQL */ `
  subscription OnCreateAlert($owner: String) {
    onCreateAlert(owner: $owner) {
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
export const onUpdateAlert = /* GraphQL */ `
  subscription OnUpdateAlert($owner: String) {
    onUpdateAlert(owner: $owner) {
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
export const onDeleteAlert = /* GraphQL */ `
  subscription OnDeleteAlert($owner: String) {
    onDeleteAlert(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateUserFavs = /* GraphQL */ `
  subscription OnCreateUserFavs($owner: String) {
    onCreateUserFavs(owner: $owner) {
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
export const onUpdateUserFavs = /* GraphQL */ `
  subscription OnUpdateUserFavs($owner: String) {
    onUpdateUserFavs(owner: $owner) {
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
export const onDeleteUserFavs = /* GraphQL */ `
  subscription OnDeleteUserFavs($owner: String) {
    onDeleteUserFavs(owner: $owner) {
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
