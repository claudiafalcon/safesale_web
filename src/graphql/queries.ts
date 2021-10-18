/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyProperties = /* GraphQL */ `
  query NearbyProperties(
    $location: LocationInput!
    $m: Int
    $limit: Int
    $nextToken: String
  ) {
    nearbyProperties(
      location: $location
      m: $m
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      total
      nextToken
    }
  }
`;
export const searchProperties = /* GraphQL */ `
  query SearchProperties(
    $criteria: CriteriaInput!
    $limit: Int
    $nextToken: String
  ) {
    searchProperties(
      criteria: $criteria
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      total
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      conversations {
        items {
          id
          name
          type
          members
          schedulerdate
          scheduler
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchPropertys = /* GraphQL */ `
  query SearchPropertys(
    $filter: SearchablePropertyFilterInput
    $sort: SearchablePropertySortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPropertys(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getAlert = /* GraphQL */ `
  query GetAlert($id: ID!) {
    getAlert(id: $id) {
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
  }
`;
export const listAlerts = /* GraphQL */ `
  query ListAlerts(
    $filter: ModelAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      createdAt
      updatedAt
      alerts {
        items {
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
        }
        nextToken
      }
      devices {
        items {
          id
          platform
          vendorid
          token
          createdAt
          updatedAt
        }
        nextToken
      }
      favs {
        items {
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          guestmail
          content
          messageConversationId
          unread
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          guestmail
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
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
      messages {
        items {
          id
          authorId
          guestmail
          content
          messageConversationId
          unread
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          guestmail
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getConvoLink = /* GraphQL */ `
  query GetConvoLink($id: ID!) {
    getConvoLink(id: $id) {
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
      conversation {
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
  }
`;
export const listConvoLinks = /* GraphQL */ `
  query ListConvoLinks(
    $filter: ModelConvoLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConvoLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
