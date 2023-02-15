/* This file is generated and managed by dsync */

use crate::diesel::*;
use crate::schema::*;
use diesel::QueryResult;
use serde::{Deserialize, Serialize};


type Connection = create_rust_app::Connection;

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset, Identifiable)]
#[diesel(table_name=lobbies, primary_key(id))]
pub struct Lobby {
    pub id: i32,
    pub repository: String,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset)]
#[diesel(table_name=lobbies)]
pub struct LobbyForm {
    pub repository: String,
}

#[tsync::tsync]
#[derive(Serialize)]
pub struct PaginationResult<T> {
    pub items: Vec<T>,
    pub total_items: i64,
    /// 0-based index
    pub page: i64,
    pub page_size: i64,
    pub num_pages: i64,
}

impl Lobby {
    pub fn create(db: &mut Connection, item: &LobbyForm) -> QueryResult<Lobby> {
        use crate::schema::lobbies::dsl::*;

        insert_into(lobbies).values(item).get_result::<Lobby>(db)
    }

    pub fn read(db: &mut Connection, param_id: i32) -> QueryResult<Lobby> {
        use crate::schema::lobbies::dsl::*;

        lobbies.filter(id.eq(param_id)).first::<Lobby>(db)
    }

    /// Paginates through the table where page is a 0-based index (i.e. page 0 is the first page)
    pub fn paginate(db: &mut Connection, page: i64, page_size: i64) -> QueryResult<PaginationResult<Lobby>> {
        use crate::schema::lobbies::dsl::*;

        let page_size = if page_size < 1 { 1 } else { page_size };
        let total_items = lobbies.count().get_result(db)?;
        let items = lobbies.limit(page_size).offset(page * page_size).load::<Lobby>(db)?;

        Ok(PaginationResult {
            items,
            total_items,
            page,
            page_size,
            /* ceiling division of integers */
            num_pages: total_items / page_size + i64::from(total_items % page_size != 0)
        })
    }

    pub fn update(db: &mut Connection, param_id: i32, item: &LobbyForm) -> QueryResult<Lobby> {
        use crate::schema::lobbies::dsl::*;

        diesel::update(lobbies.filter(id.eq(param_id))).set(item).get_result(db)
    }

    pub fn delete(db: &mut Connection, param_id: i32) -> QueryResult<usize> {
        use crate::schema::lobbies::dsl::*;

        diesel::delete(lobbies.filter(id.eq(param_id))).execute(db)
    }
}
