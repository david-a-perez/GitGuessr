// @generated automatically by Diesel CLI.

diesel::table! {
    answered_questions (live_question_id, user_id) {
        live_question_id -> Int4,
        user_id -> Int4,
        selected -> Int4,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    live_questions (id) {
        id -> Int4,
        serialized_data -> Text,
        lobby_id -> Int4,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    lobbies (id) {
        id -> Int4,
        repository -> Text,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    role_permissions (role, permission) {
        role -> Text,
        permission -> Text,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    todos (id) {
        id -> Int4,
        text -> Text,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    user_permissions (user_id, permission) {
        user_id -> Int4,
        permission -> Text,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    user_roles (user_id, role) {
        user_id -> Int4,
        role -> Text,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    user_sessions (id) {
        id -> Int4,
        user_id -> Int4,
        refresh_token -> Text,
        device -> Nullable<Text>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        email -> Text,
        hash_password -> Text,
        activated -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::joinable!(answered_questions -> live_questions (live_question_id));
diesel::joinable!(answered_questions -> users (user_id));
diesel::joinable!(live_questions -> lobbies (lobby_id));
diesel::joinable!(user_permissions -> users (user_id));
diesel::joinable!(user_roles -> users (user_id));
diesel::joinable!(user_sessions -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    answered_questions,
    live_questions,
    lobbies,
    role_permissions,
    todos,
    user_permissions,
    user_roles,
    user_sessions,
    users,
);
