/* This file is generated and managed by dsync */

use crate::diesel::*;
use crate::schema::*;
use diesel::QueryResult;
use serde::{Deserialize, Serialize};
use crate::models::lobbies::Lobby;

type Connection = create_rust_app::Connection;

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset, Identifiable, Associations)]
#[diesel(table_name=live_questions, primary_key(id),belongs_to(Lobby, foreign_key=lobby_id))]
pub struct LiveQuestion {
    pub id: i32,
    pub serialized_data: String,
    pub lobby_id: i32,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset)]
#[diesel(table_name=live_questions)]
pub struct LiveQuestionForm {
    pub serialized_data: String,
    pub lobby_id: i32,
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

impl LiveQuestion {
    pub fn create(db: &mut Connection, item: &LiveQuestionForm) -> QueryResult<LiveQuestion> {
        use crate::schema::live_questions::dsl::*;

        insert_into(live_questions).values(item).get_result::<LiveQuestion>(db)
    }

    pub fn read(db: &mut Connection, param_id: i32) -> QueryResult<LiveQuestion> {
        use crate::schema::live_questions::dsl::*;

        live_questions.filter(id.eq(param_id)).first::<LiveQuestion>(db)
    }

    /// Paginates through the table where page is a 0-based index (i.e. page 0 is the first page)
    pub fn paginate(db: &mut Connection, page: i64, page_size: i64) -> QueryResult<PaginationResult<LiveQuestion>> {
        use crate::schema::live_questions::dsl::*;

        let page_size = if page_size < 1 { 1 } else { page_size };
        let total_items = live_questions.count().get_result(db)?;
        let items = live_questions.limit(page_size).offset(page * page_size).load::<LiveQuestion>(db)?;

        Ok(PaginationResult {
            items,
            total_items,
            page,
            page_size,
            /* ceiling division of integers */
            num_pages: total_items / page_size + i64::from(total_items % page_size != 0)
        })
    }

    pub fn update(db: &mut Connection, param_id: i32, item: &LiveQuestionForm) -> QueryResult<LiveQuestion> {
        use crate::schema::live_questions::dsl::*;

        diesel::update(live_questions.filter(id.eq(param_id))).set(item).get_result(db)
    }

    pub fn delete(db: &mut Connection, param_id: i32) -> QueryResult<usize> {
        use crate::schema::live_questions::dsl::*;

        diesel::delete(live_questions.filter(id.eq(param_id))).execute(db)
    }
}
