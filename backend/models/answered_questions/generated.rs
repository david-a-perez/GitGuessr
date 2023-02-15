/* This file is generated and managed by dsync */

use crate::diesel::*;
use crate::schema::*;
use diesel::QueryResult;
use serde::{Deserialize, Serialize};
use crate::models::live_questions::LiveQuestion;
use crate::models::users::User;

type Connection = create_rust_app::Connection;

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset, Identifiable, Associations)]
#[diesel(table_name=answered_questions, primary_key(live_question_id,user_id),belongs_to(LiveQuestion, foreign_key=live_question_id) ,belongs_to(User, foreign_key=user_id))]
pub struct AnsweredQuestion {
    pub live_question_id: i32,
    pub user_id: i32,
    pub selected: i32,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

#[tsync::tsync]
#[derive(Debug, Serialize, Deserialize, Clone, Queryable, Insertable, AsChangeset)]
#[diesel(table_name=answered_questions)]
pub struct AnsweredQuestionForm {
    pub selected: i32,
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

impl AnsweredQuestion {
    pub fn create(db: &mut Connection, item: &AnsweredQuestionForm) -> QueryResult<AnsweredQuestion> {
        use crate::schema::answered_questions::dsl::*;

        insert_into(answered_questions).values(item).get_result::<AnsweredQuestion>(db)
    }

    pub fn read(db: &mut Connection, param_live_question_id: i32, param_user_id: i32) -> QueryResult<AnsweredQuestion> {
        use crate::schema::answered_questions::dsl::*;

        answered_questions.filter(live_question_id.eq(param_live_question_id)).filter(user_id.eq(param_user_id)).first::<AnsweredQuestion>(db)
    }

    /// Paginates through the table where page is a 0-based index (i.e. page 0 is the first page)
    pub fn paginate(db: &mut Connection, page: i64, page_size: i64) -> QueryResult<PaginationResult<AnsweredQuestion>> {
        use crate::schema::answered_questions::dsl::*;

        let page_size = if page_size < 1 { 1 } else { page_size };
        let total_items = answered_questions.count().get_result(db)?;
        let items = answered_questions.limit(page_size).offset(page * page_size).load::<AnsweredQuestion>(db)?;

        Ok(PaginationResult {
            items,
            total_items,
            page,
            page_size,
            /* ceiling division of integers */
            num_pages: total_items / page_size + i64::from(total_items % page_size != 0)
        })
    }

    pub fn update(db: &mut Connection, param_live_question_id: i32, param_user_id: i32, item: &AnsweredQuestionForm) -> QueryResult<AnsweredQuestion> {
        use crate::schema::answered_questions::dsl::*;

        diesel::update(answered_questions.filter(live_question_id.eq(param_live_question_id)).filter(user_id.eq(param_user_id))).set(item).get_result(db)
    }

    pub fn delete(db: &mut Connection, param_live_question_id: i32, param_user_id: i32) -> QueryResult<usize> {
        use crate::schema::answered_questions::dsl::*;

        diesel::delete(answered_questions.filter(live_question_id.eq(param_live_question_id)).filter(user_id.eq(param_user_id))).execute(db)
    }
}
