use create_rust_app::Connection;
use diesel::QueryResult;
use serde::{Deserialize, Serialize};

use crate::schema::*;
use crate::diesel::*;
use crate::{
    user::User, ID, Utc,
};

#[tsync::tsync]
#[derive(
    Debug, Serialize, Deserialize, Clone, Queryable, Insertable, Associations, AsChangeset,
)]
#[diesel(table_name = user_roles, belongs_to(User))]
pub struct UserRole {
    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Add columns here in the same order as the schema
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    pub user_id: ID,
    pub role: String,
    pub created_at: Utc,
}

#[derive(Debug, Serialize, Deserialize, Clone, Insertable, AsChangeset)]
#[diesel(table_name = user_roles)]
pub struct UserRoleChangeset {
    /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    Add columns here in the same order as the schema
    Don't include non-mutable columns
    (ex: id, created_at/updated_at)
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
    pub user_id: ID,
    pub role: String,
}

impl UserRole {
    pub fn create(db: &mut Connection, item: &UserRoleChangeset) -> QueryResult<Self> {
        use crate::schema::user_roles::dsl::*;

        insert_into(user_roles)
            .values(item)
            .get_result::<UserRole>(db)
    }

    pub fn create_many(
        db: &mut Connection,
        items: Vec<UserRoleChangeset>,
    ) -> QueryResult<Vec<Self>> {
        use crate::schema::user_roles::dsl::*;

        insert_into(user_roles)
            .values(items)
            .get_results::<UserRole>(db)
    }

    pub fn read(db: &mut Connection, item_user_id: ID, item_role: &str) -> QueryResult<Self> {
        use crate::schema::user_roles::dsl::*;

        user_roles
            .filter(user_id.eq(item_user_id).and(role.eq(item_role)))
            .first::<UserRole>(db)
    }

    pub fn read_all(db: &mut Connection, item_user_id: ID) -> QueryResult<Vec<Self>> {
        use crate::schema::user_roles::dsl::*;

        user_roles
            .filter(user_id.eq(item_user_id))
            .order(created_at)
            .load::<UserRole>(db)
    }

    pub fn delete(db: &mut Connection, item_user_id: ID, item_role: &str) -> QueryResult<usize> {
        use crate::schema::user_roles::dsl::*;

        diesel::delete(user_roles.filter(user_id.eq(item_user_id).and(role.eq(item_role))))
            .execute(db)
    }

    pub fn delete_many(
        db: &mut Connection,
        item_user_id: ID,
        item_roles: &[&str],
    ) -> QueryResult<usize> {
        use crate::schema::user_roles::dsl::*;

        diesel::delete(user_roles.filter(user_id.eq(item_user_id).and(role.eq_any(item_roles))))
            .execute(db)
    }
}
