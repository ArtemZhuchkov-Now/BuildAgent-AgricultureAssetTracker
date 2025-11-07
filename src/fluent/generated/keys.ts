import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'agritech-dashboard': {
                        table: 'sys_ui_page'
                        id: '17d76c66b87b4e86be6fba3d978ff164'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '1eef4ff86f2f438fb70bc70d60c244f6'
                    }
                    'combine-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: '40c5fde0b3864469b203ab826e44155b'
                    }
                    'cultivator-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: 'f7990038004a4f6cb6bbf4553b8db1d9'
                    }
                    equipment_maintenance_rule: {
                        table: 'sys_script'
                        id: '3d2dfc8e27fe43309c893078f7426ef0'
                    }
                    'irrigation-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: 'bdd8718615a6470f9173b665ac0e45da'
                    }
                    'mower-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: 'ac50bcd7b4954661b8673cf0ee27cb33'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '863bfa75fa764139a5ad5c7d7b55e141'
                    }
                    'planter-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: '83ea46f97ce34fd69bb954604c700df1'
                    }
                    'sprayer-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: '5d8072a2d12b4373963c94a60954e50d'
                    }
                    'src_server_maintenance-scheduler_js': {
                        table: 'sys_module'
                        id: 'abbd81bde1c5415ab50d1d42d1cd151b'
                    }
                    'tractor-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: 'b2759e9db53345e79fa64975c72544fb'
                    }
                    'tractor-02': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: '2c77c6194d2e4bbcad28773ab8ad27df'
                    }
                    'trailer-01': {
                        table: 'x_snc_agritech_ass_farm_equipment'
                        id: 'b71391b5f9ea49ff8865357ea696f858'
                    }
                    'x_snc_agritech_ass/leaflet-src-xrCXlC9N': {
                        table: 'sys_ux_lib_asset'
                        id: '7e1ec19f9d654260b0589b0bd3ef130d'
                    }
                    'x_snc_agritech_ass/leaflet-src-xrCXlC9N.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '5b58a8840a2749139ec90c32c63fd50f'
                    }
                    'x_snc_agritech_ass/main': {
                        table: 'sys_ux_lib_asset'
                        id: '4875d101a2e545a5b47d0c115f5e7641'
                    }
                    'x_snc_agritech_ass/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '4470101000ca4565b3753bad83c2cb50'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '006eddb6c79742f882e2d15e445e0da1'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operating_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0128a922d06e4b48b90f34f52e4900b5'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ad6614e5ce14b42b629eb747a115eec'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'year_manufactured'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '14d9e61a464a4753b23d3feab267966b'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'purchase_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19bd3b640bb94e9cbbf993237c8dd192'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'manufacturer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1aac9c55997a400588edff38830c7de2'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'fuel_level'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c30a40d22854effb389e722f9aaa739'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'model'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1df35fab23e04ed3b241bea5fa7579de'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '22ca5fc225744c63bbdfe25f06bb0695'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'trailer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '283c771dbe004ef6b136d72aeb66a4dc'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'combine_harvester'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3567b9f5ebb84a5686094be5845bbbba'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '372bc0fba46548a2aebe944821d95202'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'vibration_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3971fd9a5e8a49fda2b8f04f23dc3a63'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'gps_latitude'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a136988b5134435b79260f6e9b682c0'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'irrigation_system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '417928c14c2a4ec68f773a716862a263'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'gps_latitude'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4181bcc707ad48abab033421f49d0574'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'tractor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42f3c8b4d5ea43078785d13c039f8b43'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operating_hours'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43d65d470e1348178ebd1cd6fd507cb5'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45c85ff6c7c84cf78688971b7f32fe6b'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'temperature'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '499b0690d0d94d91b67a63f0456f60af'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'next_maintenance_due'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f1b000f686d401eb3a1b5a2eeefb5c5'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'fuel_efficiency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '581c9244d4fc484ab73476440bbc0593'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '675cd8d71e5f4015b89b7ba9851b1884'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'assigned_operator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68756cef4f3c403eb1900d181d4411b3'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c59959f5a8d44b4ab857683a6f2844c'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6fe65d1992944bcca7de168d3fd7a02a'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'model'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '756d5c5527fe493bad91308f990df65f'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'maintenance_interval_hours'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '766bb860cbce41bb9d4a55a07b8545d6'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            value: 'fair'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78b54ce429f14e00bec953ac78fdc868'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ebf6ea8a960486988804bec6a6dbb8c'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'year_manufactured'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83bf5617a37449219920affb3ce7c19f'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'current_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86012bad35914ad390b0aa8393ffd630'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'gps_longitude'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86267e4b7bfc48fb8942043c34e60b3a'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'last_maintenance_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a96f237790e41edb24ff67ee25c936e'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'last_maintenance_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bd447d869674d62a9d797f2bfe662af'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'maintenance_interval_hours'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94c846a34d884d1986df301eefb1ce34'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'fuel_efficiency'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9513f70f9a064bdc8b0333ea47e9fc6c'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            value: 'excellent'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9995617406c04ed6997fea840016e75a'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'purchase_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99f2e8df362544ce9bef2a69b9123901'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            value: 'good'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b2d4218a1e448a6bd02ac1d1d88bd25'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'fuel_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b9ba77236d3487191bdd9459a5f7c03'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'sprayer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c643bbcbb194f028f203c11e3554724'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            value: 'idle'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a508be2499bb40cda50d4ed89c408eb1'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'gps_longitude'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7d491491f3f471782e18cbb64451817'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa729af33b314c1b9cb0fb4cfa243b81'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'insurance_expiry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac87ace4a6ed4d31898fc31fd2de83f8'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad9c40c61676427ba909b9c2c215c232'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'mower'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'add06f61142b4994a2dbea3cda45130e'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'current_location'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae32f10a937944ca9a65b1c6dc14a3f9'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'purchase_price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'afc8152856c24dd4805c1f9b1eebeb33'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'purchase_price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b470030e81fc48ddb082321d38800fe4'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b49c29e6147e4d90b0e82ac2fc2149a6'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'current_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b77da300c8d0472d923991af382b0d8d'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'planter'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7f736ea98ec43f68e11a7707ead6031'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'vibration_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9471b6d0c6043eea66466b322bb75ac'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd8a88873a87424ba7055b5037d41641'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0094d52d930412f81703146f1715332'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'health_status'
                            value: 'poor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1d5a9ad76654113b4edf097e4327daa'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3a0d621f47b48a49cf3e1637d6f5172'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'equipment_type'
                            value: 'cultivator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4a881fd8e0e448fb82426c060393ca4'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            value: 'repair'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7971509b8f94a24aa0e55209af27e8d'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'insurance_expiry'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca60df4a38cd45fdbb85bd188a577d8a'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'warranty_expiry'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd2162a7f6cf4164818ce7ef7bd8a9c8'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd027dcc8f71c4099901c1659f563ef29'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'current_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd91d3a3e7329477ea18798733fe747e2'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd99716dab36342d797c6a9ca680efd9a'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'diagnostics_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'def2243855c14527aa88c4f665d144f1'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df1c50851a1940c79e5310792b24ef32'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'manufacturer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e66c5047aa8b4845a3c469ec398c18e9'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'warranty_expiry'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7c41739a67141b49161b835e6778ac8'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'next_maintenance_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee7539f3c50845c3973bc3704cdac61d'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef66a334f09b4b059a7e9aa43585d804'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'temperature'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f10f45302dc54db3bb7bccaa441bbc8e'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f27b13c430e44290914514e74dc1be61'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4c93f9998df479ca8b04399e3bf579b'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'assigned_operator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f537431c684a4359b4b9810ac1ca50db'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'operational_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f624b2ebc8c44186b5d345fa3c31dea5'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd3a3070fdda4f829f69c5767b726ffa'
                        key: {
                            name: 'x_snc_agritech_ass_farm_equipment'
                            element: 'diagnostics_code'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
