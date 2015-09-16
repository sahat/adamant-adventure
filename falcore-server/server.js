var falcor = require('falcor');
var Router = require('falcor-router');
var jsong = require('falcor-json-graph');
var falcorExpress = require('falcor-express');

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/'));

var keyStats = {
  "game": {
    "xml:lang": "en-US",
    "yahoo:uri": "/v1/editorial/game/mlb.g.350720122",
    "game_id": "mlb.g.350720122",
    "game_status": {
      "type": "status.type.final",
      "description": "Final",
      "display_name": "Final"
    },
    "start_time": "Mon, 20 Jul 2015 23:05:00 +0000",
    "last_updated": "2015-07-23 23:03:50",
    "global_id": "mlb.g.1500608",
    "is_time_tba": "false",
    "season": "2015",
    "is_placeholder_game": "false",
    "game_type_id": "1",
    "season_phase_id": "season.phase.season",
    "game_type": "Regular Season",
    "sportacular_url": "ysportacular://scores/details?csnID=638490507&sportName=mlb",
    "is_final_scored": "true",
    "outcome": {
      "type": "outcome.type.won",
      "winning_team_id": "mlb.t.22"
    },
    "team_ids": [
      {
        "away_team_id": "mlb.t.30"
      },
      {
        "home_team_id": "mlb.t.22"
      },
      {
        "global_away_team_id": "mlb.t.254"
      },
      {
        "global_home_team_id": "mlb.t.246"
      }
    ],
    "navigation_links": [],
    "tv_coverage": [],
    "box_score": {},
    "stat_categories": [
      {
        "stat_category": {
          "xml:lang": "en-US",
          "yahoo:uri": "/v1/editorial/stat_category/mlb.stat_category.4",
          "stat_category_id": "mlb.stat_category.4",
          "name": "Team Batting",
          "default_sort_stat_type_id": "mlb.stat_type.401",
          "cut_types": [
            []
          ],
          "stat_types": [
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.401",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".252"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.401",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".249"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.401",
                "stat_type_id": "mlb.stat_type.401",
                "name": "Batting Avg",
                "abbr": "AVG",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.401&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.403",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1238"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.403",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1198"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.403",
                "stat_type_id": "mlb.stat_type.403",
                "name": "Hits",
                "abbr": "H",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.403&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.404",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "111"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.404",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "142"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.404",
                "stat_type_id": "mlb.stat_type.404",
                "name": "Homeruns",
                "abbr": "HR",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.404&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.407",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "249"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.407",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "240"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.407",
                "stat_type_id": "mlb.stat_type.407",
                "name": "Doubles",
                "abbr": "2B",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.407&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.408",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "34"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.408",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "30"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.408",
                "stat_type_id": "mlb.stat_type.408",
                "name": "Triples",
                "abbr": "3B",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.408&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.412",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".304"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.412",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".313"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.412",
                "stat_type_id": "mlb.stat_type.412",
                "name": "On Base %",
                "abbr": "OBP",
                "sort_orientation": "DESC",
                "supports_qualification": 1,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.412&qualified=true&sortOrder=desc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.413",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".384"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.413",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".400"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.413",
                "stat_type_id": "mlb.stat_type.413",
                "name": "Slugging %",
                "abbr": "SLG",
                "sort_orientation": "DESC",
                "supports_qualification": 1,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.4,mlb.stat_type.413&qualified=true&sortOrder=desc"
              }
            }
          ]
        }
      },
      {
        "stat_category": {
          "xml:lang": "en-US",
          "yahoo:uri": "/v1/editorial/stat_category/mlb.stat_category.5",
          "stat_category_id": "mlb.stat_category.5",
          "name": "Team Pitching",
          "default_sort_stat_type_id": "mlb.stat_type.501",
          "cut_types": [
            []
          ],
          "stat_types": [
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.501",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "3.69"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.501",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "4.87"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.501",
                "stat_type_id": "mlb.stat_type.501",
                "name": "Earned Runs Avg",
                "abbr": "ERA",
                "sort_orientation": "ASC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.501&qualified=true&sortOrder=asc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.502",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1150"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.502",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1428"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.502",
                "stat_type_id": "mlb.stat_type.502",
                "name": "Hits",
                "abbr": "H",
                "sort_orientation": "ASC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.502&qualified=true&sortOrder=asc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.508",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1.22"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.508",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1.47"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.508",
                "stat_type_id": "mlb.stat_type.508",
                "name": "Walks plus Hits per Inning Pitched",
                "abbr": "WHIP",
                "sort_orientation": "ASC",
                "supports_qualification": 1,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.508&qualified=true&sortOrder=asc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.509",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".239"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.509",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": ".282"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.509",
                "stat_type_id": "mlb.stat_type.509",
                "name": "Batting Average Against",
                "abbr": "BAA",
                "sort_orientation": "ASC",
                "supports_qualification": 1,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.509&qualified=true&sortOrder=asc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.510",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1212"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.510",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "1017"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.510",
                "stat_type_id": "mlb.stat_type.510",
                "name": "Strikeouts",
                "abbr": "K",
                "sort_orientation": "ASC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.510&qualified=true&sortOrder=asc"
              }
            },
            {
              "stat_type": {
                "0": {
                  "stats": {
                    "0": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.511",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.30",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.30",
                        "team_global_id": "mlb.t.254",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "407"
                      }
                    },
                    "1": {
                      "stat": {
                        "stat_type_id": "mlb.stat_type.511",
                        "stat_variation_id": "mlb.stat_variation.1",
                        "cut_type": "0",
                        "season": "2015",
                        "season_display": "2015",
                        "season_phase_id": "season.phase.season",
                        "global_id": null,
                        "entity_id": "mlb.t.22",
                        "player_id": null,
                        "opposing_player_id": null,
                        "team_id": "mlb.t.22",
                        "team_global_id": "mlb.t.246",
                        "game_id": null,
                        "game_global_id": null,
                        "value": "439"
                      }
                    },
                    "xml:lang": "en-US"
                  }
                },
                "xml:lang": "en-US",
                "yahoo:uri": "/v1/editorial/stat_type/mlb.stat_type.511",
                "stat_type_id": "mlb.stat_type.511",
                "name": "Bases on Balls",
                "abbr": "BB",
                "sort_orientation": "DESC",
                "supports_qualification": 0,
                "sportacular_link": "ysportacular://mlb/players?sportName=mlb&filter=mlb.stat_category.5,mlb.stat_type.511&qualified=true&sortOrder=desc"
              }
            }
          ]
        }
      }
    ]
  }
};


app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
  return new Router([
    // game
    // team_stats
    // player_stats
    {
      route: "keystats.[{keys}]",
      get: function(pathSet) {

        var leagueId = pathSet[1][0];
        var statCategories = keyStats.game.stat_categories.map(function(statCategory) { return statCategory.stat_category });
        var stats = statCategories.map(function(statCategory) {

          var statTypes = statCategory.stat_types.map(function(statType) {
            var stat = statType.stat_type['0'].stats['0'].stat;
            stat.stat_category_id = statCategory.stat_category_id;
            return stat;
          });

          return statTypes;
        });

        return {
          path: ['keystats', leagueId],
          value: jsong.atom(stats)
        };
      }
    },
    {
      route: "season_stat_leaders.[{keys}]",
      get: function(pathSet) {

        var leagueId = pathSet[1][0];
        var statCategories = keyStats.game.stat_categories.map(function(statCategory) { return statCategory.stat_category });
        var stats = statCategories.map(function(statCategory) {

          var statTypes = statCategory.stat_types.map(function(statType) {
            var stat = statType.stat_type['0'].stats['0'].stat;
            stat.stat_category_id = statCategory.stat_category_id;
            return stat;
          });

          return statTypes;
        });

        return {
          path: ['season_stat_leaders', leagueId],
          value: jsong.atom(stats)
        };
      }
    }
  ]);
}));


var server = app.listen(5000);