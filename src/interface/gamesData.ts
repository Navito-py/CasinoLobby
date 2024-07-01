export interface GamesDataInterface {
    categories:          string[];
    features:            string[];
    themes:              string[];
    icons:               any[];
    backgrounds:         any[];
    id:                  string;
    server_game_id:      null | string;
    extearnal_game_id:   string;
    front_game_id:       string;
    name:                string;
    title:               null;
    ratio?:              string;
    status:              String;
    provider:            string;
    show_as_provider:    string;
    provider_title:      string;
    game_options:        null | string;
    blocked_countries:   null;
    has_age_restriction: number;
    icon_2:              string;
    background?:         string;
    types:               Types;
    game_skin_id:        string;
    cats:                Cat[];
    feats:               Cat[];
    thms:                Cat[];
    active:              string;
    icon_3?:             string;
    width?:              string;
    height?:             string;
}

export interface Cat {
    id:    string;
    title: string;
    type:  string;
}


export interface Types {
    realMode:   number;
    funMode?:   number;
    is_target?: number;
    viewMode?:  number;
}
