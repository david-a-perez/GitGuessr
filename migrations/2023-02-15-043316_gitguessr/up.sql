CREATE TABLE lobbies (
    id SERIAL PRIMARY KEY,
    repository TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
SELECT manage_updated_at('lobbies');
CREATE TABLE live_questions (
    id SERIAL PRIMARY KEY,
    serialized_data TEXT NOT NULL,
    lobby_id integer NOT NULL REFERENCES lobbies ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
SELECT manage_updated_at('live_questions');
CREATE TABLE answered_questions (
    live_question_id int REFERENCES live_questions ON DELETE CASCADE,
    user_id int REFERENCES users ON DELETE CASCADE,
    selected int NOT NULL,
    CONSTRAINT answered_questions_pkey PRIMARY KEY (live_question_id, user_id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
SELECT manage_updated_at('answered_questions');
